export const mobs = [
  {
    name: 'Phinigel Autropos',
    race: 'Kedge',
    class: 'Wizard',
    level: 53,
    spawn: {
      zone: 'Kedge Keep',
      location: '(37, 111)',
      respawnTime: '12 hours'
    },
    stats: {
      ac: 454,
      hp: 18000,
      damagePerHit: 205,
      attacksPerRound: 3,
      special: [
        'Summon',
        'Uncharmable',
        'Unfearable',
        'Unmezzable',
        'See Invisible',
        'Belly Caster',
        'Immune to Run Speed Changes'
      ]
    }
  },
  {
    name: 'Lord Nagafen',
    race: 'Lava Dragon',
    class: 'Warrior',
    level: 55,
    spawn: {
      zone: "Nagafen's Lair",
      location: '(-1395, -871)',
      respawnTime: '7 days (+/- 8 hours variance)'
    },
    stats: {
      ac: 470,
      hp: 32000,
      damagePerHit: '140 - 300',
      attacksPerRound: 4,
      special: [
        'Enrage',
        'Summon',
        'Uncharmable',
        'Unfearable',
        'Unmezzable',
        'Unstunnable',
        'See Invisible',
        'Belly Caster'
      ],
      casts: [
        'Dragon Roar (Fear)',
        'Lava Breath (PB AoE 500 Fire Damage + Cancel Magic)'
      ]
    }
  },
  {
    name: 'Lady Vox',
    race: 'Lava Dragon',
    class: 'Cleric',
    level: 55,
    spawn: {
      zone: 'Permafrost',
      location: '(857, -262)',
      respawnTime: '7 days (+/- 8 hours variance)'
    },
    stats: {
      ac: 470,
      hp: 32000,
      damagePerHit: '85 - 218',
      attacksPerRound: 4,
      special: [
        'Banish',
        'Dragon Roar',
        'Frost Breath',
        'Complete Heal',
        'Enrage',
        'Summon',
        'Uncharmable',
        'Unfearable',
        'Unmezzable',
        'Unstunnable',
        'See Invisible',
        'See Hide',
        'Belly Caster'
      ],
      resistances: {
        mr: 340,
        cr: 1000,
        dr: 340,
        fr: 70,
        pr: 340
      }
    }
  },
  {
    name: 'Maestro of Rancor',
    race: 'Vampire',
    class: 'Bard',
    level: '52 - 53',
    spawn: {
      zone: 'Plane of Hate',
      location: '(-82, 295)',
      respawnTime: '3 days (+/- 8 hours)'
    },
    stats: {
      ac: 363,
      hp: 16000,
      damagePerHit: '160 - 250',
      attacksPerRound: 2,
      special: [
        'Immune to Flee',
        'Immune or Hard to Slow',
        'See Invisible',
        'See Hide',
        'AoE Lifetap (200 HP)'
      ]
    }
  },
  {
    name: 'Innoruuk',
    race: 'Innoruuk',
    class: 'Warrior (Wizard Pre-revamp)',
    level: '63+ (55 Pre-revamp)',
    spawn: {
      zone: 'Plane of Hate',
      location: 'Wanders Upstairs',
      respawnTime: '7 days (+/- 8 hours variance)'
    },
    stats: {
      ac: 376,
      hp: 200000,
      damagePerHit: '260 - 400',
      attacksPerRound: 2,
      special: ['Rampage', 'See Rogue Hide'],
      casts: [
        'Pillage Enchantment (4 slot, single target dispel melee proc)',
        'Avatar Power (AoE Knockback + 1 slot dispell + 100DD)'
      ]
    }
  },
  {
    name: 'Cazic Thule',
    race: 'Cazic-Thule',
    class: 'Shadow Knight',
    level: 70,
    spawn: {
      zone: 'Plane of Fear',
      location: 'Wanders (NE)',
      respawnTime: '7 days (+/- 8 hours variance)'
    },
    stats: {
      ac: 504,
      hp: 451000,
      damagePerHit: '223 - 603',
      attacksPerRound: 2,
      special: [
        'Avatar Power (100 DD + knockback + single top slot dispel)',
        'Avatar Snare (AE Snare)',
        'Panic (Random target, single target fear)',
        'Cazic Touch (30 sec refresh)',
        'Zone-wide Assist Agro',
        'Enrage'
      ]
    }
  },
  {
    name: 'Dracoliche',
    race: 'Dragon Skeleton',
    class: 'Shadow Knight',
    level: 58,
    spawn: {
      zone: 'Plane of Fear',
      location: 'Wanders',
      respawnTime: '7 days (+/- 8 hours)'
    },
    stats: {
      ac: 396,
      hp: 178000,
      damagePerHit: 'max 600',
      attacksPerRound: '1-2',
      special: [
        'Summon',
        'Uncharmable',
        'Unfearable',
        'Unmezzable',
        'Unstunnable',
        'See Invisible',
        'Belly Caster',
        'Deadly Lifetap',
        'Rotting Flesh'
      ]
    }
  }
];
