function updateTime() {
  const currentTimeUTC = new Date().toISOString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
}

// Update time on page load
updateTime();
