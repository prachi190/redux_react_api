import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TodoChart = ({ todos }) => {
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = todos.length - completedTodos;

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Todo Completion Status',
    },
    series: [
      {
        name: 'Todos',
        data: [
          { name: 'Completed', y: completedTodos },
          { name: 'Pending', y: pendingTodos },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TodoChart;
