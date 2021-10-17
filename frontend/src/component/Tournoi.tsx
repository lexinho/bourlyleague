import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Player from "./Player";
import Spacer from "./Spacer";

function Tournoi() {

    const [tournoi, setTournoi] = useState('');

    const handleChangeSelect = (event: SelectChangeEvent) => {
      setTournoi(event.target.value as string);
    };

    return (
        <>
        <CardContent>
                <Card>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sélectionne le tournoi avant de cliquer sur tout les boutons comme un gros boulet stp merci!!!!!</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tournoi}
                label="Age"
                onChange={handleChangeSelect}
            >
                <MenuItem value={0}>Tournoi #7 du 19/10/2021</MenuItem>
                <MenuItem value={1}>Tournoi #8 du 26/10/2021</MenuItem>
                <MenuItem value={2}>Tournoi #9 du 02/11/2021</MenuItem>
                <MenuItem value={3}>Tournoi #10 du 09/11/2021</MenuItem>
                <MenuItem value={4}>Tournoi #11 du 16/11/2021</MenuItem>
                <MenuItem value={5}>Tournoi #12 du 23/11/2021</MenuItem>
                <MenuItem value={6}>Tournoi #13 du 30/11/2021</MenuItem>
                <MenuItem value={7}>Tournoi #14 du 07/12/2021</MenuItem>
                <MenuItem value={8}>Tournoi #15 du 14/12/2021</MenuItem>
                <MenuItem value={9}>Tournoi #16 du 21/12/2021</MenuItem>
                <MenuItem value={10}>Tournoi #17 du 28/12/2021</MenuItem>
                <MenuItem value={11}>Tournoi #18 du 02/11/2021</MenuItem>
                <MenuItem value={12}>Tournoi #19 du 02/11/2021</MenuItem>
                <MenuItem value={13}>Tournoi #20 du 02/11/2021</MenuItem>
                <MenuItem value={14}>Tournoi #21 du 02/11/2021</MenuItem>
                <MenuItem value={15}>Tournoi #22 du 02/11/2021</MenuItem>
                <MenuItem value={16}>Tournoi #23 du 02/11/2021</MenuItem>
                <MenuItem value={17}>Tournoi #24 du 02/11/2021</MenuItem>
                <MenuItem value={18}>Tournoi #25 du 02/11/2021</MenuItem>
                <MenuItem value={19}>Tournoi #26 du 02/11/2021</MenuItem>
                <MenuItem value={20}>Tournoi #27 du 02/11/2021</MenuItem>
                <MenuItem value={21}>Tournoi #28 du 02/11/2021</MenuItem>
                <MenuItem value={22}>Tournoi #29 du 02/11/2021</MenuItem>
                <MenuItem value={23}>Tournoi #30 du 02/11/2021</MenuItem>
                <MenuItem value={24}>Tournoi #31 du 02/11/2021</MenuItem>
                <MenuItem value={25}>Tournoi #32 du 02/11/2021</MenuItem>
                <MenuItem value={26}>Tournoi #33 du 02/11/2021</MenuItem>
                <MenuItem value={27}>Tournoi #34 du 02/11/2021</MenuItem>
                <MenuItem value={28}>Tournoi #35 du 02/11/2021</MenuItem>
                <MenuItem value={29}>Tournoi #36 du 02/11/2021</MenuItem>
                <MenuItem value={30}>Tournoi #37 du 02/11/2021</MenuItem>
                <MenuItem value={31}>Tournoi #38 du 02/11/2021</MenuItem>
                <MenuItem value={32}>Tournoi #39 du 02/11/2021</MenuItem>
                <MenuItem value={33}>Tournoi #40 du 02/11/2021</MenuItem>
            </Select>
            </FormControl>
            </Card>
        </CardContent>
            <Spacer y={1} />
            <CardContent>
                <Card>
            <Player tournoi={tournoi} />
            </Card>
        </CardContent>
        </>
    )
}

export default Tournoi