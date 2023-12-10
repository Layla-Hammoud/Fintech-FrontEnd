export const sortRowsByDate = (rows, option) => {
    const currentDate = new Date();
  
    switch (option) {
      case "All":
        return rows.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "Monthly":
        const lastMonth = new Date(currentDate);
        lastMonth.setMonth(currentDate.getMonth() - 1);
        return rows
          .filter((row) => new Date(row.createdAt) > lastMonth)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "Weekly":
        const lastWeek = new Date(currentDate);
        lastWeek.setDate(currentDate.getDate() - 7);
        return rows
          .filter((row) => new Date(row.createdAt) > lastWeek)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "Today":
        const startOfDay = new Date(currentDate);
        startOfDay.setHours(0, 0, 0, 0);
        return rows
          .filter((row) => new Date(row.createdAt) > startOfDay)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      default:
        return rows;
    }
  };
  