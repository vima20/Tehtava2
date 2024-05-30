import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  );
};

export default Total;
