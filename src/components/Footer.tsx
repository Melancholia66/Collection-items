import {
  Box,
  Container,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 1 }}
      py={{ xs: 5, sm: 1 }}
      bgcolor="#2b4047"
      color="#ffffff8c"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box textAlign="center" color="white">
              {" "}
              Categories:{" "}
            </Box>
            <Box>Typescript</Box>
            <Box>React</Box>
            <Box>Node.js</Box>
            <Box>MongoDB</Box>
            <Box>Material UI</Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box textAlign="center" color="white">
              {" "}
              Contact{" "}
            </Box>
            <Box>
              <Link href="https://github.com/Melancholia66" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link href="https://t.me/melancholia66" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.instagram.com/melancholia66/?igshid=YmMyMTA2M2Y%3D"
                color="inherit"
              >
                <IconButton sx={{ color: "#fff" }}>
                  <TelegramIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Box textAlign="center" color="white">
              {" "}
              Contact{" "}
            </Box>
            <Box>
              <Link href="https://github.com/Melancholia66" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link href="https://t.me/melancholia66" color="inherit">
                <IconButton sx={{ color: "#fff" }}>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.instagram.com/melancholia66/?igshid=YmMyMTA2M2Y%3D"
                color="inherit"
              >
                <IconButton sx={{ color: "#fff" }}>
                  <TelegramIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 1 }} pb={{ xs: 5, sm: 0 }}>
          Collection item &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
