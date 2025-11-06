// Exportador para XML
const DataExporter = require("./DataExporter");

class XmlExporter extends DataExporter {
  export(data) {
    function toXml(obj, rootName = "root") {
      if (Array.isArray(obj)) {
        return `<${rootName}>` + obj.map(it => toXml(it, "item")).join("") + `</${rootName}>`;
      }
      let xml = `<${rootName}>`;
      for (const k in obj) {
        xml += `<${k}>${obj[k]}</${k}>`;
      }
      xml += `</${rootName}>`;
      return xml;
    }
    return toXml(data, "data");
  }
}

module.exports = XmlExporter;