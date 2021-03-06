﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using DAL;
using DAL.Entities;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using ServicesApi.Models;

namespace ServicesApi
{
    public class OAuthProvider : OAuthAuthorizationServerProvider
    {
        private readonly string _publicClientId;
        public OAuthProvider(string publicClientId)
        {
            if (publicClientId == null)
            {
                throw new ArgumentNullException("publicClientId");
            }

            _publicClientId = publicClientId;
        }

        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.Response.Headers.Add("Access-Control-Allow-Origin", new[]{ "*" });
            var userManager = context.OwinContext.GetUserManager<UserManager>();

            var user = userManager.GetUser(context.UserName, context.Password);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
            }
            else
            {
                var oAuthIdentity = CreateClaimsIdentity(user, Startup.OAuthOptions.AuthenticationType);
                context.Validated(new AuthenticationTicket(oAuthIdentity, CreateProperties(user)));
                context.Request.Context.Authentication.SignIn(oAuthIdentity);
            }

            return Task.FromResult<object>(null);
        }

        public virtual ClaimsIdentity CreateClaimsIdentity(UserEntity user, string authenticationType)
        {
            var identity = new ClaimsIdentity(authenticationType);
            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()));
            identity.AddClaim(new Claim(ClaimTypes.Email, user.Email));
            identity.AddClaim(new Claim(ClaimTypes.Name, user.Name));

            return identity;
        }

        public static AuthenticationProperties CreateProperties(UserEntity user)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "userName", user.Email }
            };
            return new AuthenticationProperties(data);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            // Resource owner password credentials does not provide a client ID.
            if (context.ClientId == null)
            {
                context.Validated();
            }

            return Task.FromResult<object>(null);
        }

        public override Task ValidateClientRedirectUri(OAuthValidateClientRedirectUriContext context)
        {
            if (context.ClientId == _publicClientId)
            {
                Uri expectedRootUri = new Uri(context.Request.Uri, "/");

                if (expectedRootUri.AbsoluteUri == context.RedirectUri)
                {
                    context.Validated();
                }
            }

            return Task.FromResult<object>(null);
        }

    }
}