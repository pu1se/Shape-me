using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.ModelBinding;

namespace DAL
{
    public static class Extensions
    {
        public static bool IsNullOrEmpty(this string str)
        {
            return string.IsNullOrEmpty(str);
        }

        public static string ToHtmlString(this string st)
        {
            if (st.IsNullOrEmpty())
                return st;
            return st.Replace(Environment.NewLine, "<br/>").Replace("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    }
}
