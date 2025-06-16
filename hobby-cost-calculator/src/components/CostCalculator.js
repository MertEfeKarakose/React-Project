import React, { useState, useEffect } from 'react';
import costData from '../data/costData';

const CostCalculator = () => {
  const [hobby, setHobby] = useState('');
  const [level, setLevel] = useState('');
  const [country, setCountry] = useState('');
  const [showCost, setShowCost] = useState(false);
  const [checkedOptional, setCheckedOptional] = useState({});

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hobbies = Object.keys(costData);
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const countries = ['Turkey', 'United States'];

  const handleCheckbox = (label) => {
    setCheckedOptional((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.cost, 0);

  const renderCostSection = (label, items, isOptional = false) => {
    const filtered = isOptional
      ? items.filter((i) => checkedOptional[i.label])
      : items;

    const total = calculateTotal(filtered);

    return (
      <div style={styles.costBlock}>
        <h3>{label}</h3>
        <ul style={styles.itemList}>
          {items.map((item, idx) => (
            <li key={idx} style={styles.itemRow}>
              <span>
                {isOptional && (
                  <input
                    type="checkbox"
                    checked={!!checkedOptional[item.label]}
                    onChange={() => handleCheckbox(item.label)}
                    style={{ marginRight: 6 }}
                  />
                )}
                {item.label}
              </span>
              <span>{item.currency}{item.cost}</span>
            </li>
          ))}
        </ul>
        <p style={styles.total}>
          {label} Total: {items[0]?.currency ?? '$'}
          {total}
        </p>
      </div>
    );
  };

  const renderCosts = () => {
    if (!hobby || !level || !country) return null;
    const data = costData[hobby]?.[level]?.[country];
    if (!data) return <p>No data available.</p>;

    const optionalSelected = data.optional.filter(
      (item) => checkedOptional[item.label]
    );

    const allItems = [
      ...data.required,
      ...data.levelSpecific,
      ...optionalSelected,
    ];

    const totalInitial = allItems
      .filter((item) => !item.label.includes('/year'))
      .reduce((sum, item) => sum + item.cost, 0);

    const yearlyCost = allItems
      .filter((item) => item.label.includes('/year'))
      .reduce((sum, item) => sum + item.cost, 0);

    return (
      <div style={styles.result}>
        {renderCostSection('Required Costs', data.required)}
        {renderCostSection('Level-Specific Upgrades', data.levelSpecific)}
        {renderCostSection('Optional Add-Ons', data.optional, true)}

        <div style={styles.totalBlock}>
          <p style={styles.totalLine}>
            <strong>Total Initial Cost:</strong> {allItems[0]?.currency}{totalInitial}
          </p>
          {yearlyCost > 0 && (
            <p style={styles.totalLine}>
              <strong>Estimated Annual Cost:</strong> {allItems[0]?.currency}{yearlyCost}
            </p>
          )}
        </div>
      </div>
    );
  };

  // Dinamik responsive stil
  const dynamicSelectGroupStyle = {
    ...styles.selectGroupBase,
    flexDirection: isMobile ? 'column' : 'row',
  };

  return (
    <div style={styles.wrapper}>
      <div style={dynamicSelectGroupStyle}>
        <select style={styles.select} value={hobby} onChange={(e) => setHobby(e.target.value)}>
          <option value="">Select your hobby</option>
          {hobbies.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>

        <select style={styles.select} value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Choose your level</option>
          {levels.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>

        <select style={styles.select} value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button style={styles.button} onClick={() => setShowCost(true)}>Calculate Cost</button>

      {showCost && renderCosts()}
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
  },
  selectGroupBase: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  select: {
    padding: '12px 18px',
    fontSize: '16px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    minWidth: '220px',
    backgroundColor: '#fff',
    transition: 'border 0.2s',
  },
  button: {
    display: 'block',
    margin: '0 auto 30px auto',
    padding: '14px 28px',
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },  
  result: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
  },
  costBlock: {
    marginBottom: '20px',
  },
  itemList: {
    listStyle: 'none',
    padding: 0,
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px solid #eee',
  },
  totalBlock: {
    marginTop: '30px',
    paddingTop: '10px',
    borderTop: '2px solid #ccc',
  },
  totalLine: {
    fontSize: '18px',
    margin: '8px 0',
  },
};

export default CostCalculator;
