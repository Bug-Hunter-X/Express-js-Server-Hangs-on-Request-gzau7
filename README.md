# Node.js Express.js Server Hang

This repository demonstrates a common issue in Node.js Express.js applications where the server hangs on requests if the `res.end()` method is missing from the response handling function. 

The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected version.  The problem is caused by a failure to explicitly close the response, leaving the connection open indefinitely.