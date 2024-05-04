# Google Forms Auction
A Google forms that carries out an auction by automatically updating the current bid on the form.

# How
Google Forms saves answers to a spreadsheet.  
Google Apps Script lets us write custom code for Google apps such as Spreadsheets or Forms.

In the forms edit page, click "Scripts" on the dropdown menu. Then add this code and tweak it to your liking.  
Set up an "on submit" trigger.

Then, it will automatically replace the text of a section with the current value of the bid, in case a form submission contains a value that is greater than the current bid.

Easy and cool.

# Wow, your code is BAD!
Yeah, who knows Apps Script best practices even. I did this in a few minutes for the [SAC2024](https://www.worldcubeassociation.org/competitions/SAC2024).
