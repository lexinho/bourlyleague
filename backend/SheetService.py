import gspread


class SheetService:

    def __init__(self):
        gc = gspread.service_account(filename='bourlycred.json')
        sh = gc.open("BOURLY LEAGUE")
        self.sheet = sh.sheet1

    def increment_cell(self, row, col):
        val = self.get_cell_value(row, col)
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

