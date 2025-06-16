const costData = {
  Guitar: {
    Beginner: {
      Turkey: {
        required: [
          { label: 'Guitar', cost: 2000, currency: '₺' },
          { label: 'Tuner', cost: 200, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Online lessons', cost: 250, currency: '₺' },
        ],
        optional: [
          { label: 'Wall mount', cost: 150, currency: '₺' },
          { label: 'Bluetooth tuner', cost: 350, currency: '₺' },
          { label: 'String replacement /year', cost: 600, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: 'Guitar', cost: 150, currency: '$' },
          { label: 'Tuner', cost: 30, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Online lessons', cost: 50, currency: '$' },
        ],
        optional: [
          { label: 'Wall mount', cost: 25, currency: '$' },
          { label: 'Bluetooth tuner', cost: 40, currency: '$' },
          { label: 'String replacement /year', cost: 50, currency: '$' },
        ],
      },
    },

    Intermediate: {
      Turkey: {
        required: [
          { label: 'Electric Guitar', cost: 5000, currency: '₺' },
          { label: 'Amplifier', cost: 3000, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Music Theory Course', cost: 1000, currency: '₺' },
        ],
        optional: [
          { label: 'Pedalboard', cost: 1200, currency: '₺' },
          { label: 'Cable set', cost: 400, currency: '₺' },
          { label: 'String replacement /year', cost: 800, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: 'Electric Guitar', cost: 500, currency: '$' },
          { label: 'Amplifier', cost: 300, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Music Theory Course', cost: 100, currency: '$' },
        ],
        optional: [
          { label: 'Pedalboard', cost: 200, currency: '$' },
          { label: 'Cable set', cost: 60, currency: '$' },
          { label: 'String replacement /year', cost: 70, currency: '$' },
        ],
      },
    },

    Advanced: {
      Turkey: {
        required: [
          { label: 'High-end Guitar', cost: 10000, currency: '₺' },
          { label: 'Amp + Effects', cost: 7000, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Studio Recording Setup', cost: 5000, currency: '₺' },
        ],
        optional: [
          { label: 'Custom Pedals', cost: 2000, currency: '₺' },
          { label: 'Backup Guitar', cost: 6000, currency: '₺' },
          { label: 'String replacement /year', cost: 1000, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: 'High-end Guitar', cost: 1200, currency: '$' },
          { label: 'Amp + Effects', cost: 800, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Studio Recording Setup', cost: 700, currency: '$' },
        ],
        optional: [
          { label: 'Custom Pedals', cost: 300, currency: '$' },
          { label: 'Backup Guitar', cost: 900, currency: '$' },
          { label: 'String replacement /year', cost: 90, currency: '$' },
        ],
      },
    },
  },

  Camping: {
    Beginner: {
      Turkey: {
        required: [
          { label: 'Tent', cost: 3000, currency: '₺' },
          { label: 'Sleeping Bag', cost: 1200, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Headlamp', cost: 400, currency: '₺' },
        ],
        optional: [
          { label: 'Camping Stove', cost: 1000, currency: '₺' },
          { label: 'Powerbank', cost: 750, currency: '₺' },
          { label: 'Gas canisters /year', cost: 500, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: 'Tent', cost: 200, currency: '$' },
          { label: 'Sleeping Bag', cost: 100, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Headlamp', cost: 30, currency: '$' },
        ],
        optional: [
          { label: 'Camping Stove', cost: 80, currency: '$' },
          { label: 'Powerbank', cost: 60, currency: '$' },
          { label: 'Gas canisters /year', cost: 40, currency: '$' },
        ],
      },
    },

    Intermediate: {
      Turkey: {
        required: [
          { label: '4-season Tent', cost: 6000, currency: '₺' },
          { label: 'Thermal Sleeping Bag', cost: 2500, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Cooking Kit', cost: 1500, currency: '₺' },
        ],
        optional: [
          { label: 'GPS Device', cost: 2000, currency: '₺' },
          { label: 'Camping Table & Chair', cost: 1800, currency: '₺' },
          { label: 'Refillable Gas /year', cost: 800, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: '4-season Tent', cost: 400, currency: '$' },
          { label: 'Thermal Sleeping Bag', cost: 250, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Cooking Kit', cost: 100, currency: '$' },
        ],
        optional: [
          { label: 'GPS Device', cost: 150, currency: '$' },
          { label: 'Camping Table & Chair', cost: 120, currency: '$' },
          { label: 'Refillable Gas /year', cost: 60, currency: '$' },
        ],
      },
    },

    Advanced: {
      Turkey: {
        required: [
          { label: 'Ultralight Tent', cost: 9000, currency: '₺' },
          { label: 'Down Sleeping Bag', cost: 4000, currency: '₺' },
        ],
        levelSpecific: [
          { label: 'Solar Panel Kit', cost: 5000, currency: '₺' },
        ],
        optional: [
          { label: 'Satellite Communicator', cost: 8000, currency: '₺' },
          { label: 'Camping Hammock', cost: 1500, currency: '₺' },
          { label: 'Annual Maintenance /year', cost: 1000, currency: '₺' },
        ],
      },
      "United States": {
        required: [
          { label: 'Ultralight Tent', cost: 600, currency: '$' },
          { label: 'Down Sleeping Bag', cost: 350, currency: '$' },
        ],
        levelSpecific: [
          { label: 'Solar Panel Kit', cost: 400, currency: '$' },
        ],
        optional: [
          { label: 'Satellite Communicator', cost: 500, currency: '$' },
          { label: 'Camping Hammock', cost: 100, currency: '$' },
          { label: 'Annual Maintenance /year', cost: 70, currency: '$' },
        ],
      },
    },
  },
};

export default costData;
