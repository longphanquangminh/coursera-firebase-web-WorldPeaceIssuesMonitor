// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-CT77c3YDG_clEgWWWVwp-WoDda7eXk8",
  authDomain: "phan-quang-minh-long.firebaseapp.com",
  databaseURL: "https://phan-quang-minh-long-default-rtdb.firebaseio.com",
  projectId: "phan-quang-minh-long",
  storageBucket: "phan-quang-minh-long.appspot.com",
  messagingSenderId: "512552014980",
  appId: "1:512552014980:web:089ee965f2687427709ed1",
  measurementId: "G-76C5X8H02B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref("issues/");

// Task 4 ------------------------------------------

rootRef.on(
  "value",

  (snapshot) => {
    const listTableBody = document.getElementById("list-table-body");

    // clear all the table rows first
    listTableBody.textContent = "";

    snapshot.forEach((child) => {
      issue = child.val();
      // console.log(issue);
      var row = document.createElement("tr");
      row.innerHTML =
        "<td>" +
        issue.severity +
        "</td><td>" +
        issue.description +
        "</td><td>" +
        "<select onchange='updateIssue(\"" +
        child.key +
        "\", this.value)'>" +
        "<option value='no'" +
        (issue.resolved == "no" ? " selected" : "") +
        ">no</option>" +
        "<option value='yes'" +
        (issue.resolved == "yes" ? " selected" : "") +
        ">yes</option>" +
        "</select>" +
        "</td>" +
        "<td><input type='button' class='btn btn-danger' value='X' onclick='deleteIssue(\"" +
        child.key +
        "\")'/></td>";

      listTableBody.append(row);
    });
  },

  (error) => {
    console.log("Error: " + error.code);
  }
);

// Task 5 ------------------------------------------

function addNewIssue() {
  const severity = document.getElementById("severity-dropdown").value;
  const description = document.getElementById("description-textfield").value;
  const resolved = document.getElementById("resolved-dropdown").value;

  if (description.length == 0) {
    alert("Description cannot be blank!");
    return;
  }

  rootRef.push({
    description: description,
    resolved: resolved,
    severity: severity,
  });

  document.getElementById("description-textfield").value = "";
}

// Task 6 ------------------------------------------

function updateIssue(issueKey, newResolvedValue) {
  // alert("update function for issue key: " + issueKey + "newResolveValue: " + newResolvedValue);
  var recordRef = firebase.database().ref("issues/" + issueKey);

  recordRef.update({
    resolved: newResolvedValue,
    // ,
  });
}

// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    // alert("delete function for issue key: " + issueKey);
    var recordRef = firebase.database().ref("issues/" + issueKey);

    recordRef.remove().catch(function (error) {
      alert("Delete failed: " + error.message);
    });
  }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/ /g, "&nbsp;");
  return str;
}
