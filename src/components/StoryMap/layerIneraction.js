export const handleScroll = (isFlying, setScrollPosition, map) => {
    if (isFlying) return; // Prevent interruptions

    requestAnimationFrame(() => {
      isFlying = true;
      const position = window.scrollY;
      setScrollPosition(position);
      console.log(position)

      if (position < 1100) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position >= 1100 && position <= 6090) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 6090 && position <= 8156) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 1);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 8156 && position <= 9500) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 1);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 9500 && position <= 11490) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 1);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 11490 && position <= 13000) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 1);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 13000 && position <= 14523) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 1);
      } else if (position > 14523 && position <= 16901) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 1);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      } else if (position > 16901) {
        map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
        map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 1);
        map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
        map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      }

      setTimeout(() => (isFlying = false), 200);
    });
};