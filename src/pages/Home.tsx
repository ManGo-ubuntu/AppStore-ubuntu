import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  InputAdornment,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface App {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
}

const sampleApps: App[] = [
  {
    id: 1,
    name: 'Firefox',
    description: 'Быстрый и безопасный веб-браузер',
    category: 'Интернет',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg',
  },
  {
    id: 2,
    name: 'GIMP',
    description: 'Мощный редактор изображений',
    category: 'Графика',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/The_GIMP_icon_-_gnome.svg',
  },
  {
    id: 3,
    name: 'VLC',
    description: 'Универсальный медиаплеер',
    category: 'Мультимедиа',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg',
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = sampleApps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Поиск приложений..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Grid container spacing={3}>
        {filteredApps.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={app.image}
                alt={app.name}
                sx={{ objectFit: 'contain', p: 2, bgcolor: 'background.paper' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {app.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {app.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  {app.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 