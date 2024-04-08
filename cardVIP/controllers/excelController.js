const xlsx = require('xlsx');            

module.exports = {
  readExcelController: (req, res) => {
    const workbook = xlsx.readFile('./list.xlsx');  
    let workbook_sheet = workbook.SheetNames;   
    let workbook_response = xlsx.utils.sheet_to_json(       
      workbook.Sheets[workbook_sheet[0]]
    );
    res.status(200).send({                                  
      list: workbook_response,
    });
  },
};