import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
  Box,
  LinearProgress,
} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

interface UpdateItem {
  id: number;
  name: string;
  version: string;
  size: string;
  description: string;
}

const updates: UpdateItem[] = [
  {
    id: 1,
    name: 'Firefox',
    version: '89.0.2',
    size: '48.2 MB',
    description: 'Обновление безопасности и исправление ошибок',
  },
  {
    id: 2,
    name: 'LibreOffice',
    version: '7.1.3',
    size: '124.5 MB',
    description: 'Новые функции и улучшения производительности',
  },
  {
    id: 3,
    name: 'GIMP',
    version: '2.10.24',
    size: '85.7 MB',
    description: 'Улучшения инструментов и поддержка новых форматов',
  },
];

const Updates = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <UpdateIcon sx={{ mr: 2, fontSize: 32 }} />
        <Typography variant="h5" component="h1">
          Доступные обновления
        </Typography>
      </Box>
      
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4 }}
      >
        Обновить все
      </Button>

      <List>
        {updates.map((update, index) => (
          <React.Fragment key={update.id}>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {update.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      Версия: {update.version} • Размер: {update.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {update.description}
                    </Typography>
                  </>
                }
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">
                  Обновить
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            {index < updates.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Updates; 