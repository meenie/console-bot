## ConsoleBot
Allows savvy developers to chat to a website owner via the browser console.

### Setup
1. Fork/Clone this repo locally
2. `npm install && jspm install`
3. **Localy**: Edit the `./server/config.js` file and add in your Slack Token and Slack Channel you want to watch.  
   **Deploying**: You need to set 3 environment variables (`NODE_ENV=production`, `SLACK_TOKEN=<token>`, and `SLACK_CHANNEL=<channel>`).
4. And then run `node server` to start everything up.

#### Original idea by: [@metakungfu](https://twitter.com/metakungfu)