import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Chip,
  Box,
} from '@mui/material';

interface RecommendedApp {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  downloads: string;
  tags: string[];
}

const recommendedApps: RecommendedApp[] = [
  {
    id: 1,
    name: 'Visual Studio Code',
    description: 'Мощный редактор кода с поддержкой множества языков программирования',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    rating: 4.8,
    downloads: '10M+',
    tags: ['Разработка', 'Редактор', 'IDE'],
  },
  {
    id: 2,
    name: 'Spotify',
    description: 'Популярный музыкальный стриминговый сервис',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    rating: 4.5,
    downloads: '5M+',
    tags: ['Музыка', 'Стриминг', 'Развлечения'],
  },
  {
    id: 3,
    name: 'OBS Studio',
    description: 'Профессиональное ПО для записи и стриминга',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/OBS_Studio_Logo.svg',
    rating: 4.7,
    downloads: '2M+',
    tags: ['Видео', 'Стриминг', 'Запись'],
  },
];

const Recommended = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
        Рекомендуемые приложения
      </Typography>
      
      <Grid container spacing={3}>
        {recommendedApps.map((app) => (
          <Grid item xs={12} md={6} key={app.id}>
            <Card sx={{ display: 'flex', height: '100%' }}>
              <CardMedia
                component="img"
                sx={{ width: 140, p: 2, objectFit: 'contain' }}
                image={app.image}
                alt={app.name}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    {app.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {app.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={app.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {app.rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                      {app.downloads} загрузок
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {app.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recommended; 