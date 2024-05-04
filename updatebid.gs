function UpdateBid() {
  // Get forms sheet
  const SHEET_ID = 'your-sheet-id'
  const SHEET = SpreadsheetApp.openById(SHEET_ID).getSheetByName('your-sheet-name')

  // Get interesting ranges (replace by yours)
  const TIMESTAMPS = SHEET.getRange('A2:A500').getValues().flat()
  const NAMES = SHEET.getRange('C2:C500').getValues().flat()
  const WEBSITES = SHEET.getRange('E2:E500').getValues().flat()
  const BIDS = SHEET.getRange('F2:F500').getValues().flat()

  // Parse and get max bid, breaking ties by timestamp
  const TABLE = TIMESTAMPS.map((val, i) => [val, NAMES[i], WEBSITES[i], BIDS[i]])

  var MAX_BID = [0, 'Vacant', '', 999]

  TABLE.forEach(row => {
    if (row[3] > MAX_BID[3] && row[0] > MAX_BID[0]) {
      MAX_BID = row
    }
  })

  // Get form
  const FORM_ID = 'your-form-id'
  const FORM = FormApp.openById(FORM_ID)

  // Update bid sections with new value
  const WEBSITE_STRING = MAX_BID[2].toString().length > 0 ? Utilities.formatString("\nWebsite: %s", MAX_BID[2]) : ''
  const MESSAGE = Utilities.formatString(
    "Amount: $%s USD\nStore: %s%s\n\n(Updated automatically)",
    MAX_BID[3]==999?1000:MAX_BID[3],
    MAX_BID[1],
    WEBSITE_STRING
  )
  
  FORM.getItemById(your-item-id).setHelpText(MESSAGE)
  FORM.getItemById(your-item-id).setHelpText(MESSAGE)
}
