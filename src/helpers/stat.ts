const useStat = (tasks: any[]) => {
  const todos = tasks.length > 0 ? tasks : [];
  const completed = (): number =>
    todos.filter((val) => val.completed === true).length;
  const completedTasks = completed();
  const uncompleted = (): number => todos.length - completedTasks;
  const completionRate = (): number => {
    if (todos.length === 0) {
      return 0;
    }
    return Math.floor((completed() / todos.length) * 100);
  };

  const stat = [
    {
      value: completedTasks,
      description: "Total tasks closed",
    },
    {
      value: uncompleted(),
      description: "Total tasks opened",
    },
    {
      value: `${completionRate()}%`,
      description: "Completion Rate",
    },
  ];

  return [stat];
};

export default useStat;
