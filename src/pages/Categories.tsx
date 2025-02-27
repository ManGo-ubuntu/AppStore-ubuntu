import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';
import {
  Brush as BrushIcon,
  Games as GamesIcon,
  Build as BuildIcon,
  Description as DescriptionIcon,
  Palette as PaletteIcon,
} from '@mui/icons-material';

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Утилиты',
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    description: 'Системные утилиты и инструменты',
    count: 245,
  },
  {
    id: 2,
    name: 'Персонализация',
    icon: <PaletteIcon sx={{ fontSize: 48 }} />,
    description: 'Темы, иконки и обои',
    count: 167,
  },
  {
    id: 3,
    name: 'Офис',
    icon: <DescriptionIcon sx={{ fontSize: 48 }} />,
    description: 'Офисные приложения и инструменты',
    count: 89,
  },
  {
    id: 4,
    name: 'Дизайн',
    icon: <BrushIcon sx={{ fontSize: 48 }} />,
    description: 'Графические редакторы и инструменты дизайна',
    count: 134,
  },
  {
    id: 5,
    name: 'Игры',
    icon: <GamesIcon sx={{ fontSize: 48 }} />,
    description: 'Игры и развлечения',
    count: 312,
  },
];

const Categories = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
        Категории приложений
      </Typography>
      
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Card>
              <CardActionArea>
                <CardContent sx={{ textAlign: 'center' }}>
                  <div style={{ color: '#E95420', marginBottom: '16px' }}>
                    {category.icon}
                  </div>
                  <Typography gutterBottom variant="h6" component="div">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                  <Typography variant="caption" color="primary" sx={{ mt: 1, display: 'block' }}>
                    {category.count} приложений
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Categories; 