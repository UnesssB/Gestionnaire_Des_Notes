// Replace this with your actual Google Sheet ID
var SHEET_ID = '146zkuzMr05zqvpJFzdjxxF60tFUD0ReH3kOZFeoAfxM';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('login')
    .setTitle('Login Page')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function checkLogin(rt, cin) {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Sheet1');
  var data = sheet.getDataRange().getValues();
  
  Logger.log("Checking login for RT: " + rt + ", CIN: " + cin);
  Logger.log("Total rows in sheet: " + data.length);
  
  for (var i = 1; i < data.length; i++) {
    Logger.log("Row " + i + ": " + data[i][0] + ", " + data[i][6]);
    if (data[i][0] == rt && data[i][6] == cin) {
      Logger.log("Match found at row " + i);
      var userInfo = {};
      for (var j = 0; j < data[0].length; j++) {
        userInfo[data[0][j]] = data[i][j];
      }
      return {success: true, userInfo: userInfo};
    }
  }
  
  Logger.log("No match found");
  return {success: false, error: "Login failed. Please check your ر. ت. and N° CIN."};
}

function getNotes(rt, cin) {
  var sheet2 = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Sheet2');
  var data = sheet2.getDataRange().getValues();
  
  var headers = data[2];
  var userRowIndex = data.findIndex(row => row[0] == rt && row[6] == cin);
  
  if (userRowIndex === -1) {
    return {success: false, error: "User not found"};
  }
  
  var userRow = data[userRowIndex];
  
  var notes = {
    'مجموعة أ': {},
    'مجموعة ب': {},
    'مجموعة ج': {},
    'مجموعة د': {},
    'نتائج نهائية': {}
  };
  
  // Group A (index 10-15)
  for (var i = 10; i < 15; i++) {
    notes['مجموعة أ'][headers[i]] = userRow[i];
  }
  notes['مجموعة أ']['المعدل'] = userRow[15];
  
  // Group B (index 16-20)
  for (var i = 16; i < 20; i++) {
    notes['مجموعة ب'][headers[i]] = userRow[i];
  }
  notes['مجموعة ب']['المعدل'] = userRow[20];
  
  // Group C (index 21-25)
  for (var i = 21; i < 25; i++) {
    notes['مجموعة ج'][headers[i]] = userRow[i];
  }
  notes['مجموعة ج']['المعدل'] = userRow[25];
  
  // Group D (index 26-31)
  for (var i = 26; i < 31; i++) {
    notes['مجموعة د'][headers[i]] = userRow[i];
  }
  notes['مجموعة د']['المعدل'] = userRow[31];
  
  // Final results
  notes['نتائج نهائية'] = {
    'معدل المجموعات': userRow[32],
    'امتحان التخرج': userRow[33],
    'المجموع': userRow[34]
  };
  
  return {success: true, notes: notes};
}

function submitComment(rt, cin, comment) {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Sheet3');
  var sheet1 = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Sheet1');
  
  // Find the user's information in Sheet1
  var data = sheet1.getDataRange().getValues();
  var userRow = data.find(row => row[0] == rt && row[6] == cin);
  
  if (!userRow) {
    return {success: false, error: 'User not found'};
  }
  
  // Get the user's name and surname
  var nom = userRow[3];  // Assuming the surname is in column D
  var prenom = userRow[2];  // Assuming the first name is in column C
  
  // Append the new comment to Sheet3
  sheet.appendRow([cin, nom, prenom, comment]);
  
  return {success: true, message: 'تم إرسال التعليق بنجاح'};
}
