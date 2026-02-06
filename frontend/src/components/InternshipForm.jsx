import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";


export default function InternshipForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    college: "",
    city: "",
    phone: "",
    email: "",
    semester: "",
    domain: "",
    mode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://emberquest.onrender.com/submit", formData);


      alert("Form Submitted Successfully ✅");

      setFormData({
        full_name: "",
        college: "",
        city: "",
        phone: "",
        email: "",
        semester: "",
        domain: "",
        mode: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting form ❌");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, hsl(27, 16%, 89%) 0%, hsla(242, 39%, 87%, 0.71) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          //bgcolor: "#1b2a36",
          primary: "#1b2a36",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 4,
            textAlign: "center",
            borderBottom: "1px solid #2c3e50",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="orange">
            Internship Enquiry 
          </Typography>

          <Typography variant="body1" color="gray">
            Connect with EmberQuest Team
          </Typography>
        </Box>

        {/* Form */}
        <Box sx={{ p: 4 }}>
          <Typography
            variant="h6"
            mb={3}
            color="orange"
            fontWeight="bold"
          >
            Registration Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>

              {/* Name */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* College */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="College"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* City */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* Phone */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* Semester */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                />
              </Grid>

              {/* Domain */}
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                >
                  <MenuItem value="Web Development">Web Development</MenuItem>
                  <MenuItem value="AI / ML">AI / ML</MenuItem>
                  <MenuItem value="Cloud">Cloud</MenuItem>
                  <MenuItem value="Full Stack">Full Stack</MenuItem>
                  <MenuItem value="Data Science">Data Science</MenuItem>
                </TextField>
              </Grid>

              {/* Mode */}
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  fullWidth
                  label="Mode"
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  required
                  variant="filled"
                  sx={inputStyle}
                >
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Offline">Offline</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </TextField>
              </Grid>

              {/* Submit */}
              <Grid item xs={12} textAlign="center" mt={3}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 6,
                    py: 1.5,
                    bgcolor: "orange",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: 3,
                    boxShadow: "0 6px 15px rgba(255,165,0,0.4)",
                    ":hover": {
                      bgcolor: "#ff9800",
                    },
                  }}
                >
                  SUBMIT
                </Button>
              </Grid>

            </Grid>
          </form>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            py: 2,
            bgcolor: "#16202b",
          }}
        >
          <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: 4,
    mt: 1,
  }}
>
  {/* WhatsApp */}
  <Box
    component="a"
    href="https://wa.me/919731755053" // Change number
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "#25D366",
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "16px",
      "&:hover": {
        color: "#1ebe5d",
        transform: "scale(1.1)",
      },
    }}
  >
    <FaWhatsapp size={22} />
    WhatsApp
  </Box>

  {/* Instagram */}
  <Box
    component="a"
    href="https://www.instagram.com/https://www.instagram.com/emberquest1?igsh=MTEyajYyb2hpc3Azaw==" // Change ID
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "#E1306C",
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "16px",
      "&:hover": {
        color: "#C13584",
        transform: "scale(1.1)",
      },
    }}
  >
    <FaInstagram size={22} />
    Instagram
  </Box>
</Box>

          <Typography variant="caption" color="gray">
            © 2026 EmberQuest
          </Typography>
        </Box>

      </Paper>
    </Box>
  );
}

/* Input Dark Style */
const inputStyle = {
  bgcolor: "#1b2a36",
  borderRadius: 1,

  "& label": {
    color: "#bbb",
  },

  "& input": {
    color: "white",
  },

  "& .MuiFilledInput-root": {
    backgroundColor: "#223040",
  },

  "& .MuiFilledInput-root:before": {
    borderBottom: "1px solid #555",
  },

  "& .MuiFilledInput-root:hover:before": {
    borderBottom: "1px solid orange",
  },
};
