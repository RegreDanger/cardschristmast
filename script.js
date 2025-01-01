const snowflakesContainer = document.getElementById('snowflakes');
  const snowflakeCount = 50;

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
    snowflakesContainer.appendChild(snowflake);
  }
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const innerCard = card.querySelector('.card-inner');
      innerCard.style.transform = 
        innerCard.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
    });
  });
