import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px">
          Tutor
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="1rem"
        m="2rem auto"
        borderRadius="1.5rem"
      >
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
