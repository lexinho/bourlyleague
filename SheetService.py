import gspread

creds = {
    "type": "service_account",
    "project_id": "bourlyleague",
    "private_key_id": "2c695433f567fd75719d8ccc6b90cab5bc79702d",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDk4gz1HQUlNpYI\nYeyymyXA6IssoLblpOrsxAQ+gnOt800MVO3mjMggNjMpDAKldp5W/4R6c/IYmu9e\n1uXbscJZ03c1faDVvW7onj26aZMzN/NrkGtlEgmSfqi9TME9Vwwm/5BpP1LIGcwe\nEzOWQgJWnWTg0j4hT07n4IvIgXZYYtxYQnnWHTD7xZUHPY7YoLhVDM+bacMmzlP9\nr6/vv3D3k8fFlfDqzmhNahwGr4igzHjUGA5uWHgNQLjjwDY66KNhqntKf8P9qprI\n0vD4/VYuCvEt+I6XK988vlsSa9k6SyFRV+ljKvDsWei+JtLdsdLiW4Cu0mpar4kF\n20uflQ2dAgMBAAECggEAUozpKXqnAW33nNxct2pXqoT0tUrdzGO3y19DPJxmRoXq\n8xiqmS2LfHqv5w0K40yt/Si5SkUJOzCeRvFxA9TQCP/JDgTaflyNZN612sb7LUzv\nwYrcAR8JTsnZ6DSHuazsmCAyoJMTM1KCmRJJ19bE6yJnYOLTP8ZP6jfFkrKG0Ydf\n3WbuX3z1BA40Q1gQBfhp+RHqzSBNZzCDCeJ/htp94s63P/U5nkFPmuQmZR+dQlVw\nymnRgTMsl/J0dfZb6JpKgO5FIGvMjXM8ZAN+xp8rMsjFVgyBCa8D+F+DnMUbauRD\nqOemOdBy5hnAIjdbb1piU0F/ZCNFOxd2Bcap9k887QKBgQD0U1PVa746P1XagoFq\nmWrGJ3ZWMQOgsKgjf8RBnneldkhGNCKgMVEciMzNmXxbE+A5OH630d4xpyrzJkBF\ng4X0NnmM2K29NhXvTpu3BKPol5mPhEetVLAlYl6pKY8sC/LURs+8wTV0SN57Qlvd\n458SRtGuBvBBOv5X2Z1xVg6S4wKBgQDv0dNMN+h+nXg/rFwwvrPOvxBfaUK5W3P1\n6pY74xG+K2RUNrJdN723mBULhhPRzlpfFS+nyRS90zvsfLa7q0kiThxtv9gPMTOs\nfiX/U+3L9weIr+B6mz0Nw2s1OeCE71u6bViKXYvcPn3iNv4Gw31Wrba9nbpl4Pyt\n5N9F4KFFfwKBgQDFu3Zaf/MZEs75o6r3Sag3LBLCWLKV5sJ80FdVv9kW6O4/Gsx3\nFtKNJE2Ti0cwMprB1G4BeHC5gI/q7qcPWw0bAsdGbMnXGqGP5e9xo+i/QYm+s5CK\nv8I6zyzK/N5pCFaC47gWC8umC5865A6TOjcvxG7Hx8fDEupq0Kxx3/K1fwKBgBSO\n1iAogsOn2BENQ3HiRyOn+U1UhqXBEzW3gF1t361/psAZWDzpdFfyr4snWTeZCuIv\nvMATWrXTD8X8AuYfjstkCsfVtD3JJ/bXcYZruWzMplavTPz1pcwyPlR3u6lpo2Fd\n0kM6Na0RplToBeqqg2oUxh+HD91/5ek6P3GMCgcdAoGBALgrDMvmoVEjQ2jMyc3u\nPnMuX000x6/2cPMR0/O9dPih9JbjCT/Gp2238MCbNiweI9c9QqppeyhmWNcxoxFM\na71bJCBcZIO9XB8sMdIZHlvv/vKAerPdXctdDovJjgCnrjuEwBkPoNFEEqLoiu3n\nh+SUBqCERDaxbhlQIoOueNFP\n-----END PRIVATE KEY-----\n",
    "client_email": "bourly@bourlyleague.iam.gserviceaccount.com",
    "client_id": "102818559778686178121",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/bourly%40bourlyleague.iam.gserviceaccount.com"
}

class SheetService:

    def __init__(self):
        gc = gspread.service_account_from_dict(creds)
        sh = gc.open("BOURLY LEAGUE")
        self.sheet = sh.sheet1

    def increment_cell(self, row, col):
        val = self.get_cell_value(row, col)
        if val is None:
            val_updated = 1
        else:
            val_updated = int(str(val)) + 1
        self.update_cell(row, col, str(val_updated))

    def update_cell(self, row, col, value):
        self.sheet.update_cell(row, col, value)

    def get_cell_value(self, row, col):
        return self.sheet.cell(row, col).value

    def update_killed(self, row, col, killed):
        already_killed = self.get_cell_value(row, col)
        if already_killed is None:
            self.update_cell(row, col, killed)
        else:
            self.update_cell(row, col, "{}{}{}".format(already_killed, '\n', killed))

