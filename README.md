# Fiji Live Clock Gadget for MediaWiki

This is a MediaWiki gadget that displays the current time in Fiji (UTC+12 with support for daylight saving time) in a 12-hour format with AM/PM. The time updates automatically every second.

## Author

**Suyash Dwivedi**  
[User:Suyash.dwivedi](https://meta.wikimedia.org/wiki/User:Suyash.dwivedi)

![Suyash Dwivedi](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Suyash_Dwivedi_01%28cropped%29.jpg/180px-Suyash_Dwivedi_01%28cropped%29.jpg)  

## Features

- **Automatic Time Calculation**: The gadget uses the `Pacific/Fiji` timezone, automatically adjusting for Fiji’s daylight saving time.
- **Live Clock**: The clock updates every second to show the current time in Fiji.
- **12-Hour Format**: The time is displayed in a 12-hour format with AM/PM for better readability.
- **MediaWiki Integration**: Adds the clock to a MediaWiki page or user interface element, allowing you to refresh the page with a simple click.

## How to Use

### 1. As a MediaWiki Gadget

1. **Install the Gadget**: Copy the JavaScript code from [FijiClock.js](https://hif.wikipedia.org/wiki/sadasya:Suyash.dwivedi/FijiClock.js) and add it to your MediaWiki's gadget or a user script.
2. **Customize the Portlet**: By default, the gadget adds the live clock to the 'p-personal' portlet, but this can be customized by changing the `portletId`.
3. **Refresh Functionality**: Clicking the clock will purge the page cache, ensuring the most recent time is displayed.

### 2. As a User Script

If you do not have admin access, you can still install the Fiji Clock as a user script in your own MediaWiki account:

1. **Navigate to Your User JavaScript Page**:
   - Go to your `common.js` page, located at:
     ```
     https://[your-wiki-domain]/wiki/User:[YourUsername]/common.js
     ```

2. **Add the Fiji Clock Script**: Copy the JavaScript code from [FijiClock.js](https://hif.wikipedia.org/wiki/sadasya:Suyash.dwivedi/FijiClock.js) and paste it into your `common.js` file.

3. **Save the Page**: After saving the script, the Fiji clock will appear in your personal tools section when logged in.

## License

This project is licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) license.
