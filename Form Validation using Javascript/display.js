

var query=window.location.search;
query=query.slice(1);//to remove the question mark

name_value=query.split('&');

property_value_pair={}

for (let i=0;i<name_value.length;i++)
{

    var nv=name_value[i].split('=');
    if(nv[0] in property_value_pair)
    {
        property_value_pair[nv[0]]=property_value_pair[nv[0]]+","+nv[1].replace("%40","@").replace("%2B%2B","").replace(/\+/g," ")
    }
    else
    {
        property_value_pair[nv[0]]=nv[1].replace("%40","@").replace("%2B%2B","").replace(/\+/g," ").replace(/%0D%0A/g,"\n");
    }
}

console.log(property_value_pair);

document.writeln("<p>Thank you for your response! Please check if the details you entered are correct!</p><br><br>")
document.writeln("<table style='border:0.3rem solid black'>");
document.writeln("<tr><th style='border-bottom:0.3rem solid black'>Field</th><th style='border-bottom:0.3rem solid black'>Value</th></tr>");
for(const property in property_value_pair)
{
    document.writeln("<tr><th>"+property+"</th><td style='border-left:0.3rem solid black'>"+property_value_pair[property]+"</td></tr>");
}
document.writeln("</table>");

