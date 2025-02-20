import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CropPreview({ cropData }) {
  return (
    <Card style={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        image={cropData}
        alt="Cropped"
        style={{ width: '100%', height: 'auto' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cropped Image
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is the preview of the cropped image.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CropPreview;
