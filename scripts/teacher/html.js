export const logInhtml = `
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

export const createAcounthtml = `
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

<label class="input-container">
    <label for="subject" class="inputs-titles">
        Subject:
    </label>
    <select type="text" class="inputs" id="subject">
        <option>Computer Science</option>
        <option>Math</option>
        <option>Physics</option>
        <option>Technique</option>
        <option>Science</option>
        <option>Arab</option>
        <option>French</option>
        <option>English</option>
        <option>Geography</option>
        <option>Theory</option>
        <option>Svillasation</option>
    </select>
</label>

<a class="buttons" id="createAcount">Create Acount</a>`;

export const tableRequestConfirmHtml = `
<table class="requestTable">
<thead>
    <tr>
        <th class="requestTitle" id="requestIdTitle">Request Id:</th>
        <th class="requestTitle" id="requestTypeTitle">Request Type:</th>
        <th class="requestTitle id="requestFirstNameTitle>First Name</th>
        <th class="requestTitle" id="requestLastName">Last Name:</th>
        <th class="requestTitle>Confirm Request:</th>
    </tr>
</thead>
<tbody></tbody>
<tfoot>
    <a id="confirmRequest">
        Submit
    </a>
    <a id="deleteRequest">
        Delete
    </a>
</tfoot>
</table>
<div class="result"></div>`;
