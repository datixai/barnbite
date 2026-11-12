/* Hand drawn flat food icons (64 x 64), original artwork. */
(function () {
  const steam = (x) => `<path d="M${x - 8} 14c-2 3 2 5 0 8M${x} 11c-2 3 2 5 0 8M${x + 8} 14c-2 3 2 5 0 8" stroke="#C9BFB2" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;

  const I = {};

  I.burger = `
    <path d="M9 29C9 17 19 10 32 10s23 7 23 19z" fill="#F2A23A"/>
    <path d="M14 25c1-7 8-11 17-11" stroke="#F9C77E" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g fill="#FFF4DA"><ellipse cx="22" cy="19" rx="2" ry="1.2"/><ellipse cx="32" cy="15" rx="2" ry="1.2"/><ellipse cx="42" cy="19" rx="2" ry="1.2"/><ellipse cx="28" cy="24" rx="2" ry="1.2"/><ellipse cx="38" cy="24" rx="2" ry="1.2"/></g>
    <path d="M7 31c3-3 5 2 8 0s5-3 8 0 5 2 8 0 5-3 8 0 5 2 8 0 5-3 9 0v4H7z" fill="#5DBB3F"/>
    <rect x="8" y="36" width="48" height="10" rx="5" fill="#6B3418"/>
    <path d="M9 35h46l-4 7-5-3-5 4-5-4-5 4-5-4-5 4-5-4-5 3z" fill="#FFC20E"/>
    <path d="M9 47h46v1c0 5-3 7-8 7H17c-5 0-8-2-8-7z" fill="#E8902F"/>`;

  I.pizza = `
    <circle cx="32" cy="32" r="27" fill="#DE8A2E"/>
    <circle cx="32" cy="32" r="22" fill="#FFC94A"/>
    <path d="M32 10v44M10 32h44M16.5 16.5l31 31M47.5 16.5l-31 31" stroke="#EDAA3A" stroke-width="1.2"/>
    <g fill="#D3372A"><circle cx="24" cy="21" r="4.4"/><circle cx="41" cy="23" r="4.4"/><circle cx="20" cy="37" r="4.4"/><circle cx="36" cy="42" r="4.4"/><circle cx="44" cy="35" r="3.6"/></g>
    <g fill="#A8261C"><circle cx="23" cy="20" r="1.2"/><circle cx="40" cy="22" r="1.2"/><circle cx="19" cy="36" r="1.2"/><circle cx="35" cy="41" r="1.2"/></g>
    <g fill="none" stroke="#2B2523" stroke-width="1.6"><circle cx="31" cy="31" r="1.9"/><circle cx="27" cy="46" r="1.9"/><circle cx="46" cy="27" r="1.9"/></g>
    <g fill="#4CAF50"><rect x="29" y="18" width="5" height="2.4" rx="1.2" transform="rotate(-25 31 19)"/><rect x="14" y="28" width="5" height="2.4" rx="1.2" transform="rotate(30 16 29)"/><rect x="40" y="46" width="5" height="2.4" rx="1.2" transform="rotate(-10 42 47)"/></g>`;

  I.fries = `
    <g transform="rotate(-9 22 22)"><rect x="19" y="8" width="5" height="30" rx="1.5" fill="#FFD54A"/></g>
    <rect x="25" y="5" width="5" height="32" rx="1.5" fill="#FFCA28"/>
    <rect x="31" y="9" width="5" height="30" rx="1.5" fill="#FFD54A"/>
    <rect x="37" y="6" width="5" height="32" rx="1.5" fill="#FFCA28"/>
    <g transform="rotate(10 43 22)"><rect x="42" y="10" width="5" height="28" rx="1.5" fill="#FFD54A"/></g>
    <path d="M14 29h36l-4 28H18z" fill="#E23D28"/>
    <path d="M14 29h36l-1 6H15z" fill="#C42F1F"/>
    <circle cx="32" cy="46" r="5.5" fill="#FFC20E"/>
    <circle cx="32" cy="46" r="2.4" fill="#E23D28"/>`;

  I.drink = `
    <path d="M36 18l6-13" stroke="#FFC20E" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M19 22h26l-3.5 34a3 3 0 0 1-3 2.6H25.5a3 3 0 0 1-3-2.6z" fill="#E23D28"/>
    <rect x="16.5" y="16" width="31" height="7" rx="3.5" fill="#F4F1EC"/>
    <path d="M21.5 33h21l-1 11h-19z" fill="#fff"/>
    <circle cx="32" cy="38.5" r="3.5" fill="#FFC20E"/>`;

  I.soda = `
    <rect x="20" y="9" width="24" height="47" rx="5" fill="#2E9E4F"/>
    <rect x="21" y="8" width="22" height="5" rx="2" fill="#C9CED6"/>
    <rect x="21" y="52" width="22" height="5" rx="2" fill="#C9CED6"/>
    <path d="M20 29c8-6 16 6 24 0v9c-8 6-16-6-24 0z" fill="#fff" opacity=".9"/>
    <circle cx="32" cy="21" r="3.2" fill="#FFC20E"/>
    <rect x="23" y="16" width="3" height="32" rx="1.5" fill="#fff" opacity=".25"/>`;

  I.coffee = `
    ${steam(30)}
    <ellipse cx="30" cy="57" rx="21" ry="3.6" fill="#E8DCC8"/>
    <path d="M44 31h4a7.5 7.5 0 0 1 0 15h-5" stroke="#FFC20E" stroke-width="4.2" fill="none"/>
    <path d="M13 27h34v17a12 12 0 0 1-12 12h-10a12 12 0 0 1-12-12z" fill="#FFC20E"/>
    <ellipse cx="30" cy="27" rx="17" ry="3.8" fill="#6B3418"/>
    <path d="M25 27c2-2.5 8-2.5 10 0-2 1.5-8 1.5-10 0z" fill="#D9A877"/>
    <rect x="17" y="33" width="3" height="14" rx="1.5" fill="#fff" opacity=".35"/>`;

  I.cocoa = `
    ${steam(30)}
    <ellipse cx="30" cy="57" rx="21" ry="3.6" fill="#E8DCC8"/>
    <path d="M44 31h4a7.5 7.5 0 0 1 0 15h-5" stroke="#B5462E" stroke-width="4.2" fill="none"/>
    <path d="M13 27h34v17a12 12 0 0 1-12 12h-10a12 12 0 0 1-12-12z" fill="#B5462E"/>
    <ellipse cx="30" cy="27" rx="17" ry="3.8" fill="#5A2E1A"/>
    <g fill="#FFF8EE"><rect x="20" y="22" width="6" height="5" rx="1.5" transform="rotate(-12 23 24)"/><rect x="28" y="21" width="6" height="5" rx="1.5"/><rect x="35" y="22" width="6" height="5" rx="1.5" transform="rotate(14 38 24)"/></g>
    <rect x="17" y="33" width="3" height="14" rx="1.5" fill="#fff" opacity=".3"/>`;

  I.tea = `
    ${steam(30)}
    <ellipse cx="31" cy="54" rx="23" ry="4.5" fill="#E8DCC8"/>
    <path d="M48 32h3a5.5 5.5 0 0 1 0 11h-5" stroke="#E2D6C2" stroke-width="3.4" fill="none"/>
    <path d="M12 28h38c0 13-8 23-19 23S12 41 12 28z" fill="#fff" stroke="#E2D6C2" stroke-width="1.5"/>
    <ellipse cx="31" cy="28" rx="19" ry="3.8" fill="#C9772B"/>
    <path d="M40 28V13" stroke="#9E8E78" stroke-width="1.2"/>
    <rect x="36.5" y="7" width="7" height="7" rx="1" fill="#4CAF50"/>
    <path d="M16 36h30" stroke="#FFC20E" stroke-width="2.4"/>`;

  I.chicken = `
    <g transform="rotate(40 32 32)">
      <rect x="29" y="37" width="6" height="15" fill="#FFF1D6"/>
      <circle cx="28.3" cy="53" r="4.2" fill="#FFF1D6"/><circle cx="35.7" cy="53" r="4.2" fill="#FFF1D6"/>
      <path d="M32 5c11 0 18 9 18 19 0 9-7 16-18 16S14 33 14 24 21 5 32 5z" fill="#D07A2A"/>
      <path d="M21 20c1-6 6-10 11-10" stroke="#EBA75A" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g fill="#A85A1A"><circle cx="38" cy="16" r="1.6"/><circle cx="42" cy="25" r="1.6"/><circle cx="33" cy="30" r="1.6"/><circle cx="25" cy="27" r="1.4"/><circle cx="36" cy="22" r="1.2"/></g>
    </g>`;

  I.wings = `
    <g transform="translate(-4 6) scale(.78)">${I.chicken.replace('#D07A2A', '#C8461F').replace('#EBA75A', '#E87A4A')}</g>
    <g transform="translate(18 2) scale(.78)">${I.chicken.replace('#D07A2A', '#D8552A').replace('#EBA75A', '#F08A52')}</g>
    <g fill="#fff" opacity=".8"><circle cx="14" cy="26" r="1"/><circle cx="40" cy="20" r="1"/><circle cx="34" cy="28" r="1"/></g>`;

  I.salad = `
    <g fill="#6CC04A"><circle cx="20" cy="30" r="8"/><circle cx="30" cy="25" r="9"/><circle cx="42" cy="27" r="8"/></g>
    <g fill="#4A9B33"><circle cx="25" cy="31" r="6"/><circle cx="46" cy="32" r="5.5"/><circle cx="36" cy="30" r="6"/></g>
    <g fill="#E2412F"><circle cx="28" cy="30" r="4"/><circle cx="41" cy="23" r="3.6"/><circle cx="17" cy="27" r="3"/></g>
    <circle cx="34" cy="21" r="3.4" fill="#E9F6D8" stroke="#5DA33A" stroke-width="1.4"/>
    <path d="M7 33h50c0 13-11 23-25 23S7 46 7 33z" fill="#FFC20E"/>
    <path d="M7 33h50" stroke="#E0A800" stroke-width="3" stroke-linecap="round"/>
    <path d="M14 42c5 6 12 8 18 8" stroke="#FFE07A" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;

  I.soup = `
    ${steam(30)}
    <path d="M44 29l12-17" stroke="#C9CED6" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M7 31h50c0 13-11 22-25 22S7 44 7 31z" fill="#FFC20E"/>
    <ellipse cx="32" cy="31" rx="25" ry="5.5" fill="#E8862E"/>
    <g fill="#FFF4DA"><circle cx="22" cy="31" r="1.8"/><circle cx="37" cy="30" r="1.8"/><circle cx="29" cy="33" r="1.4"/></g>
    <g fill="#5DBB3F"><circle cx="27" cy="29.5" r="1.5"/><circle cx="42" cy="32" r="1.5"/></g>
    <rect x="24" y="52" width="16" height="4.5" rx="2.2" fill="#E0A800"/>`;

  I.noodles = `
    <path d="M36 30L54 5M41 31L59 9" stroke="#A0612B" stroke-width="2.6" stroke-linecap="round"/>
    <ellipse cx="32" cy="30" rx="21" ry="8" fill="#F6C453"/>
    <path d="M14 30c3-9 6-9 8 0s6 8 8 0 6-9 8 0 6 8 8 0 4-6 6 0" stroke="#E3A830" stroke-width="2.2" fill="none"/>
    <g fill="#5DBB3F"><circle cx="24" cy="26" r="2"/><circle cx="40" cy="25" r="2"/></g><circle cx="32" cy="24" r="2.2" fill="#E2412F"/>
    <path d="M7 32h50c0 13-11 23-25 23S7 45 7 32z" fill="#E23D28"/>
    <path d="M13 40h38" stroke="#fff" stroke-width="2.4" stroke-dasharray="4 3"/>
    <rect x="24" y="54" width="16" height="4" rx="2" fill="#B72E1E"/>`;

  I.chinese = `
    <path d="M39 26L55 4M43 27L59 8" stroke="#A0612B" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M23 15c0-7 18-7 18 0" stroke="#9AA0A6" stroke-width="2.2" fill="none"/>
    <path d="M14 24l6-10h24l6 10z" fill="#EFE8DC"/>
    <path d="M14 24h36l-5 33H19z" fill="#fff" stroke="#E5E0D8" stroke-width="1.5"/>
    <circle cx="32" cy="40" r="8" fill="#E23D28"/>
    <path d="M28 40h8M32 36v8" stroke="#FFC20E" stroke-width="2.2" stroke-linecap="round"/>`;

  I.rice = `
    <path d="M11 34c0-13 9-20 21-20s21 7 21 20z" fill="#FFFDF7" stroke="#EDE6D6" stroke-width="1.5"/>
    <g fill="#E3DACA"><ellipse cx="22" cy="26" rx="2" ry="1"/><ellipse cx="30" cy="20" rx="2" ry="1"/><ellipse cx="40" cy="25" rx="2" ry="1"/><ellipse cx="34" cy="29" rx="2" ry="1"/><ellipse cx="26" cy="31" rx="2" ry="1"/></g>
    <g fill="#6CC04A"><circle cx="36" cy="22" r="1.8"/><circle cx="20" cy="30" r="1.8"/></g>
    <g fill="#F28C28"><rect x="27" y="24" width="3" height="3" rx=".6"/><rect x="43" y="30" width="3" height="3" rx=".6"/></g>
    <path d="M7 33h50c0 13-11 23-25 23S7 46 7 33z" fill="#2B2523"/>
    <path d="M10 39h44" stroke="#FFC20E" stroke-width="2.6"/>
    <rect x="24" y="54" width="16" height="4" rx="2" fill="#2B2523"/>`;

  I.shawarma = `
    <g><circle cx="22" cy="21" r="5.5" fill="#6CC04A"/><circle cx="30" cy="16" r="5.5" fill="#E2412F"/><circle cx="38" cy="18" r="6.5" fill="#B5652A"/><circle cx="44" cy="23" r="4.5" fill="#6CC04A"/><circle cx="31" cy="22" r="4.5" fill="#FFF4DA"/></g>
    <path d="M15 23h34L37 59h-10z" fill="#EDC27D"/>
    <path d="M20 26l4 6M28 26l2 5M38 26l-2 5" stroke="#C9923F" stroke-width="2" stroke-linecap="round"/>
    <path d="M19.5 35h25L37 59h-10z" fill="#fff"/>
    <path d="M19.5 35h25" stroke="#E23D28" stroke-width="3.4"/>
    <path d="M24 45h16" stroke="#FFC20E" stroke-width="2.4"/>`;

  I.steak = `
    <ellipse cx="32" cy="44" rx="28" ry="12" fill="#fff" stroke="#E5E0D8" stroke-width="1.5"/>
    <path d="M12 26c5-12 27-14 38-6 8 6 6 19-4 25-10 6-28 7-34-3-3-5-3-11 0-16z" fill="#F2D2B6"/>
    <path d="M15 27c5-10 24-12 34-5 6 5 5 16-4 21-9 5-25 6-30-2-3-4-3-10 0-14z" fill="#9C3B22"/>
    <path d="M22 24l-4 10M30 22l-6 16M38 22l-6 18M45 26l-5 13" stroke="#5E2414" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="20" cy="37" r="4.6" fill="#FFF1D6"/><circle cx="20" cy="37" r="1.8" fill="#E7D3B0"/>
    <g fill="#4CAF50"><ellipse cx="50" cy="46" rx="4" ry="2" transform="rotate(-20 50 46)"/><ellipse cx="14" cy="48" rx="4" ry="2" transform="rotate(20 14 48)"/></g>`;

  I.pasta = `
    <ellipse cx="32" cy="40" rx="28" ry="15" fill="#fff" stroke="#E5E0D8" stroke-width="1.5"/>
    <ellipse cx="32" cy="38" rx="20" ry="10" fill="#F1ECE3"/>
    <g fill="#F6C453" stroke="#E0A42F" stroke-width="1">
      <rect x="18" y="32" width="11" height="5" rx="1.5" transform="rotate(-25 23 34)"/><rect x="28" y="29" width="11" height="5" rx="1.5" transform="rotate(15 33 31)"/>
      <rect x="35" y="36" width="11" height="5" rx="1.5" transform="rotate(-10 40 38)"/><rect x="23" y="39" width="11" height="5" rx="1.5" transform="rotate(20 28 41)"/>
      <rect x="31" y="34" width="11" height="5" rx="1.5" transform="rotate(-40 36 36)"/>
    </g>
    <g fill="#D3372A"><circle cx="27" cy="36" r="2.2"/><circle cx="40" cy="33" r="2"/><circle cx="34" cy="43" r="2.2"/></g>
    <ellipse cx="38" cy="29" rx="4" ry="2" fill="#4CAF50" transform="rotate(-30 38 29)"/>
    <path d="M56 12v18M53 12v6a3 3 0 0 0 6 0v-6" stroke="#9AA0A6" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  I.sandwich = `
    <path d="M9 40L32 10l23 30z" fill="#F2C27A"/>
    <path d="M14 38L32 15l18 23z" fill="#FBE3B5"/>
    <path d="M8 40c3-2 4 2 7 0s4-2 7 0 4 2 7 0 4-2 7 0 4 2 7 0 4-2 7 0 4 2 4 0v4H8z" fill="#5DBB3F"/>
    <rect x="9" y="44" width="46" height="4" fill="#E2412F"/>
    <path d="M9 48h46l-3 4-4-2-5 3-5-3-5 3-5-3-5 3-5-3-4 2z" fill="#FFC20E"/>
    <rect x="9" y="51" width="46" height="6" rx="3" fill="#E6A85A"/>`;

  I.cake = `
    <path d="M12 30L36 13l16 17z" fill="#FFF1E0"/>
    <rect x="12" y="30" width="40" height="25" rx="2" fill="#6B3418"/>
    <rect x="12" y="40" width="40" height="4" fill="#FFF1E0"/>
    <rect x="12" y="49" width="40" height="3" fill="#FFF1E0"/>
    <path d="M12 30h40v4c-3 3-5-2-8 1s-5-1-8 2-5-2-8 0-5-2-8 1-5-1-8-1z" fill="#FFF1E0"/>
    <circle cx="36" cy="16" r="4.4" fill="#E2412F"/>
    <path d="M36 12c1-4 4-5 6-5" stroke="#4CAF50" stroke-width="1.6" fill="none"/>`;

  I.cupcake = `
    <path d="M15 33c-5-9 4-15 8-13 0-9 18-9 18 0 4-2 13 4 8 13z" fill="#F7A8C3"/>
    <path d="M20 26c6 3 18 3 24 0M24 19c4 2 12 2 16 0" stroke="#F18AB0" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="32" cy="10" r="4.2" fill="#E2412F"/>
    <g fill="#FFC20E"><rect x="22" y="23" width="3" height="1.4" rx=".7"/><rect x="38" y="27" width="3" height="1.4" rx=".7"/><rect x="31" y="21" width="3" height="1.4" rx=".7"/></g>
    <path d="M15 33h34l-4 23H19z" fill="#E23D28"/>
    <path d="M22 33l2 23M29 33l1 23M36 33l-1 23M43 33l-2 23" stroke="#fff" stroke-width="1.6" opacity=".55"/>`;

  I.icecream = `
    <path d="M21 32h22L32 61z" fill="#E8A65A"/>
    <path d="M24 37l11 10M29 33l9 9M23 42l7 6M40 37l-11 10M35 33l-9 9M41 42l-7 6" stroke="#C98A3A" stroke-width="1.4"/>
    <circle cx="24" cy="31" r="8.5" fill="#FFF4DA"/>
    <circle cx="40" cy="31" r="8.5" fill="#8BD17C"/>
    <circle cx="32" cy="21" r="10.5" fill="#F7A8C3"/>
    <circle cx="32" cy="9" r="3.6" fill="#E2412F"/>
    <g fill="#6B3418"><rect x="26" y="18" width="3" height="1.3" rx=".6"/><rect x="35" y="22" width="3" height="1.3" rx=".6"/><rect x="31" y="26" width="3" height="1.3" rx=".6"/></g>`;

  I.juice = `
    <path d="M37 25l7-19" stroke="#E23D28" stroke-width="3" stroke-linecap="round"/>
    <path d="M17 16h28l-4 41H21z" fill="#FFF4E2" stroke="#F0DFC4" stroke-width="1.2"/>
    <path d="M18.3 25h25.4l-3.2 31.5H21.5z" fill="#FFA726"/>
    <rect x="22" y="28" width="3" height="22" rx="1.5" fill="#fff" opacity=".35"/>
    <circle cx="46" cy="17" r="8" fill="#FFB74D" stroke="#F57C00" stroke-width="2"/>
    <path d="M46 9v16M38 17h16M40.5 11.5l11 11M51.5 11.5l-11 11" stroke="#F57C00" stroke-width="1"/>`;

  I.mocktail = `
    <path d="M36 22l9-17" stroke="#FFC20E" stroke-width="3" stroke-linecap="round"/>
    <rect x="17" y="14" width="28" height="44" rx="4" fill="#EAF6FB" stroke="#CDE3EC" stroke-width="1.4"/>
    <rect x="18.5" y="24" width="25" height="32.5" rx="3" fill="#4FC3F7"/>
    <g fill="#fff" opacity=".55"><rect x="21" y="28" width="8" height="8" rx="1.5" transform="rotate(12 25 32)"/><rect x="31" y="38" width="8" height="8" rx="1.5" transform="rotate(-10 35 42)"/></g>
    <g fill="#43A047"><ellipse cx="23" cy="22" rx="5" ry="2.6" transform="rotate(-25 23 22)"/><ellipse cx="30" cy="20" rx="5" ry="2.6" transform="rotate(20 30 20)"/></g>
    <circle cx="45" cy="16" r="7" fill="#FFEB3B" stroke="#FBC02D" stroke-width="2"/>
    <path d="M45 9v14M38 16h14" stroke="#FBC02D" stroke-width="1"/>`;

  I.margarita = `
    <path d="M10 13h44L32 36z" fill="#C5E1A5"/>
    <path d="M10 13h44" stroke="#fff" stroke-width="3" stroke-dasharray="1.5 2"/>
    <path d="M16 18h32L32 32z" fill="#AED581"/>
    <rect x="30.5" y="34" width="3" height="18" fill="#CDE3EC"/>
    <ellipse cx="32" cy="54" rx="13" ry="3.6" fill="#CDE3EC"/>
    <path d="M46 7l9 7-7 4z" fill="#8BC34A" stroke="#558B2F" stroke-width="1.4"/>
    <g fill="#43A047"><ellipse cx="28" cy="17" rx="4" ry="2" transform="rotate(-20 28 17)"/></g>`;

  I.boba = `
    <rect x="34" y="3" width="5.5" height="24" rx="2.4" fill="#E23D28" transform="rotate(12 36 15)"/>
    <path d="M17 24a15 11 0 0 1 30 0z" fill="#F4F4F4" stroke="#E2E2E2" stroke-width="1.2"/>
    <path d="M17 24h30l-4 33H21z" fill="#D7B48A"/>
    <rect x="16" y="22.5" width="32" height="3.5" rx="1.7" fill="#fff"/>
    <path d="M19 33h26" stroke="#C49A6A" stroke-width="1.4"/>
    <g fill="#3B2416"><circle cx="25" cy="52" r="2.7"/><circle cx="31" cy="53" r="2.7"/><circle cx="37" cy="52" r="2.7"/><circle cx="28" cy="48" r="2.7"/><circle cx="34" cy="48" r="2.7"/><circle cx="40" cy="47" r="2.4"/><circle cx="23" cy="47" r="2.4"/></g>`;

  I.shake = `
    <path d="M37 16l7-13" stroke="#E23D28" stroke-width="3" stroke-linecap="round"/>
    <path d="M19 22h26l-3 35H22z" fill="#F7A8C3"/>
    <path d="M19.8 30h24.4" stroke="#fff" stroke-width="2.2" opacity=".7"/>
    <g fill="#FFFDF7" stroke="#EEE6DA" stroke-width="1"><circle cx="24" cy="19" r="6.5"/><circle cx="40" cy="19" r="6.5"/><circle cx="32" cy="15" r="7.5"/><circle cx="32" cy="21" r="6"/></g>
    <circle cx="33" cy="7" r="3.8" fill="#E2412F"/>
    <rect x="23" y="34" width="3" height="18" rx="1.5" fill="#fff" opacity=".35"/>`;

  I.frappe = I.shake.replace('#F7A8C3', '#A9744F');
  I.smoothie = I.shake.replace('#F7A8C3', '#FFB74D');

  I.icedcoffee = `
    <path d="M37 18l7-14" stroke="#2B2523" stroke-width="3" stroke-linecap="round"/>
    <path d="M17 14h30l-4 43H21z" fill="#F4ECE2" stroke="#E6D9C6" stroke-width="1.2"/>
    <path d="M18.2 22h27.6l-3.4 34.5H21.6z" fill="#8B5A3C"/>
    <path d="M18.2 22h27.6l-.6 7H18.8z" fill="#E8CDB0"/>
    <g fill="#fff" opacity=".55"><rect x="22" y="31" width="8" height="8" rx="1.5" transform="rotate(14 26 35)"/><rect x="32" y="40" width="8" height="8" rx="1.5" transform="rotate(-12 36 44)"/><rect x="25" y="45" width="7" height="7" rx="1.5" transform="rotate(8 28 48)"/></g>`;

  I.cookie = `
    <circle cx="32" cy="32" r="25" fill="#C98B47"/>
    <circle cx="32" cy="32" r="22" fill="#E2AE6C"/>
    <g fill="#4A2A18"><rect x="20" y="20" width="5" height="4" rx="1.5"/><rect x="34" y="17" width="5" height="4" rx="1.5" transform="rotate(20 36 19)"/><rect x="41" y="30" width="5" height="4" rx="1.5"/><rect x="24" y="35" width="5" height="4" rx="1.5" transform="rotate(-15 26 37)"/><rect x="33" y="42" width="5" height="4" rx="1.5"/><rect x="17" y="30" width="4" height="3.4" rx="1.4"/><rect x="31" y="29" width="4" height="3.4" rx="1.4"/></g>`;

  I.brownie = `
    <path d="M10 33l8-7h34l-8 7z" fill="#7A4226"/>
    <path d="M44 33l8-7v18l-8 7z" fill="#4A2416"/>
    <rect x="10" y="33" width="34" height="18" fill="#5A2E1A"/>
    <path d="M12 30c4-3 6 2 10-1s6 2 10-1 6 2 10-1" stroke="#FFF4DA" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M18 18l8-6h22l-8 6z" fill="#8A4E2E"/>
    <path d="M40 18l8-6v8l-8 6z" fill="#5A2E1A"/>
    <rect x="18" y="18" width="22" height="8" fill="#6B3820"/>
    <g fill="#FFC20E"><circle cx="20" cy="40" r="1.4"/><circle cx="30" cy="44" r="1.4"/><circle cx="37" cy="39" r="1.4"/></g>`;

  I.kunafa = `
    <ellipse cx="32" cy="42" rx="29" ry="14" fill="#E5E0D8"/>
    <ellipse cx="32" cy="38" rx="23" ry="12" fill="#D96E14"/>
    <ellipse cx="32" cy="36" rx="23" ry="11.5" fill="#F08A24"/>
    <path d="M14 34c4-2 6 2 10 0s6 2 10 0 6 2 10 0 4 1 6 0M16 40c4-2 6 2 10 0s6 2 10 0 6 2 10 0" stroke="#D96E14" stroke-width="1.3" fill="none"/>
    <ellipse cx="32" cy="35" rx="9" ry="4.5" fill="#8BC34A"/>
    <g fill="#558B2F"><circle cx="29" cy="34" r="1"/><circle cx="34" cy="36" r="1"/><circle cx="35" cy="33" r="1"/></g>`;

  I.sauce = `
    <path d="M11 32h42l-4 19a4 4 0 0 1-4 3H19a4 4 0 0 1-4-3z" fill="#fff" stroke="#E5E0D8" stroke-width="1.5"/>
    <ellipse cx="32" cy="32" rx="21" ry="6" fill="#FFF4DA" stroke="#E5E0D8" stroke-width="1.2"/>
    <path d="M24 32c3-4 13-4 16 0-3 3-12 3-16 0z" fill="#FFE29A"/>
    <path d="M17 40h30" stroke="#FFC20E" stroke-width="3"/>
    <path d="M40 22c2-6 6-8 10-14" stroke="#C98A3A" stroke-width="3.4" stroke-linecap="round"/>`;

  const place = (key, x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">${I[key]}</g>`;
  I.combo = place('drink', 28, 0, .6) + place('fries', 2, 2, .58) + place('burger', 8, 20, .7);
  I.pizzadeal = place('drink', 32, 0, .56) + place('pizza', 0, 14, .78);
  I.chickenmeal = place('drink', 30, 0, .58) + place('fries', 2, 2, .58) + place('chicken', 10, 18, .72);

  const LABELS = {
    burger: 'Burger', pizza: 'Pizza', fries: 'Fries', drink: 'Cold drink', soda: 'Soda can', combo: 'Burger meal / deal',
    pizzadeal: 'Pizza deal', chickenmeal: 'Chicken meal', chicken: 'Fried chicken', wings: 'Wings', shawarma: 'Shawarma / wrap',
    salad: 'Salad', soup: 'Soup', noodles: 'Noodles', chinese: 'Chinese box', rice: 'Rice', steak: 'Steak', pasta: 'Pasta',
    sandwich: 'Sandwich', sauce: 'Dip sauce', coffee: 'Coffee', cocoa: 'Hot chocolate', tea: 'Tea', icedcoffee: 'Iced coffee',
    frappe: 'Frappe', smoothie: 'Smoothie', shake: 'Shake', juice: 'Juice', mocktail: 'Mocktail', margarita: 'Margarita',
    boba: 'Boba tea', icecream: 'Ice cream', cake: 'Cake slice', cupcake: 'Cupcake', brownie: 'Brownie', cookie: 'Cookie', kunafa: 'Kunafa',
  };

  window.CAFE_ICONS = {
    keys: Object.keys(LABELS),
    label: k => LABELS[k] || k,
    svg: (key, cls) => `<svg class="${cls || 'ico'}" viewBox="0 0 64 64" aria-hidden="true">${I[key] || I.burger}</svg>`,
  };
})();
