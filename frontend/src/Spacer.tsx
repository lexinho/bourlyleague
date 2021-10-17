import { Box, BoxProps, createTheme } from "@mui/system";
import React from "react";

type Props = BoxProps & {
  x?: number; // multiplier of theme.spacing
  y?: number; // multiplier of theme.spacing
  basis?: number; // multiplier of theme.spacing
};

const Spacer: React.FC<Props> = ({ x, y, basis, ...restProps }) => {
  const theme = createTheme();
  return (
    <Box
      data-testid="Spacer"
      width={x ? theme.spacing(x) : undefined}
      height={y ? theme.spacing(y) : undefined}
      flexBasis={basis ? theme.spacing(basis) : undefined}
      flexGrow={0}
      flexShrink={0}
      {...restProps}
    />
  );
};

export default Spacer;