function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Dashboard Reference Vol. 3')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Dashboard')
    .addItem('Open Dashboard', 'openDashboard')
    .addToUi();
}

function openDashboard() {
  const html = HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setWidth(1400)
    .setHeight(900);
  SpreadsheetApp.getUi().showModalDialog(html, 'Dashboard Reference Vol. 3');
}

function getSheetData() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Data');

  if (!sheet) throw new Error('Sheet tab "Data" not found. Please check the tab name.');

  const rows = sheet.getDataRange().getValues().slice(1);

  return rows
    .filter(r => r[0] !== '')
    .map(r => ({
      title:      String(r[0]  || ''),
      email:      String(r[1]  || ''),
      overall:    Number(String(r[2]).replace(/,/g,''))  || 0,
      activeDays: Number(String(r[3]).replace(/,/g,''))  || 0,
      daysLimit:  Number(String(r[4]).replace(/,/g,''))  || 0,
      gmail:      Number(String(r[5]).replace(/,/g,''))  || 0,
      docs:       Number(String(r[6]).replace(/,/g,''))  || 0,
      sheets:     Number(String(r[7]).replace(/,/g,''))  || 0,
      slides:     Number(String(r[8]).replace(/,/g,''))  || 0,
      drive:      Number(String(r[9]).replace(/,/g,''))  || 0,
      meet:       Number(String(r[10]).replace(/,/g,'')) || 0,
      studio:     Number(String(r[11]).replace(/,/g,'')) || 0,
      vids:       Number(String(r[12]).replace(/,/g,'')) || 0,
      gemini:     Number(String(r[13]).replace(/,/g,'')) || 0,
      date:       String(r[14] || '')
    }));
}
