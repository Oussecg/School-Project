export const logInHtml = `
<label class="input-container">
    <label for="username" class="inputs-titles">
        Username:
    </label>
    <input
        type="text"
        class="inputs"
        id="username"
    />
</label>

<label class="input-container">
    <label for="password" class="inputs-titles">
        Password:
    </label>
    <input
        type="text"
        class="inputs"
        id="password"
    />
</label>

<a class="buttons" id="logIn">Log In</a>`;

export const createAccountHtml = `
<label class="input-container">
    <label for="firstName" class="inputs-titles">
        First Name:
    </label>
    <input
        type="text"
        class="inputs"
        id="firstName"
    />
</label>

<label class="input-container">
    <label for="lastName" class="inputs-titles">
        Last Name:
    </label>
    <input
        type="text"
        class="inputs"
        id="lastName"
    />
</label>

<label class="input-container">
    <label for="username" class="inputs-titles">
        Username:
    </label>
    <input
        type="text"
        class="inputs"
        id="username"
    />
</label>

<label class="input-container">
    <label for="password" class="inputs-titles">
        Password:
    </label>
    <input
        type="text"
        class="inputs"
        id="password"
    />
</label>

<a class="buttons" id="createAccount">Create Account</a>`;

export const tableRequestConfirmHtml = `
<a id="disconnect">Disconnect</a>
<table class="requestTable" border="1px">
<thead>
    <tr>
        <th class="requestTitle" id="requestIdTitle">Request Id</th>
        <th class="requestTitle" id="requestTypeTitle">Request Type</th>
        <th class="requestTitle" id="requestFirstNameTitle">First Name</th>
        <th class="requestTitle" id="requestLastName">Last Name</th>
        <th class="requestTitle">Confirm Request</th>
    </tr>
</thead>
<tbody></tbody>
<tfoot>
    <tr>
    <td colspan="3">
        <a id="confirmRequest">
            Submit
        </a>
    </td>
    <td colspan="3">
    <a id="deleteRequest">
        Delete
    </a>
    </td>
    </tr>

</tfoot>
</table>
<div class="result"></div>`;
