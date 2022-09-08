import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises, isBodyPart}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}}>
      <Typography variant="h3" mb={5}>Exercies that targets the same muscle of group</Typography>
      <Stack direction="row" sx={{p:'2', position:"relative"}}>
        {targetMuscleExercises.length? <HorizontalScrollBar data={targetMuscleExercises}/>: <Loader/>}
      </Stack>
      <Typography variant="h3" mb={5}>Exercies that use the same equipment</Typography>
      <Stack direction="row" sx={{p:'2', position:"relative"}}>
        {equipmentExercises.length? <HorizontalScrollBar data={equipmentExercises}/>: <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises