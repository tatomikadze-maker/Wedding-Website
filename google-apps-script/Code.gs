function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.guest1Name || '',
    data.plusOne || '',
    data.guest2Name || '',
    data.guest3Name || '',
    data.guest4Name || '',
    data.vazStay || '',
    data.day2Stay || '',
    data.vazCostOk || '',
    data.transport || '',
    data.dietary || '',
    data.dietaryNotes || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
