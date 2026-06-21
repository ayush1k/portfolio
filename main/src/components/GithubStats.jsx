import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const GithubStats = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [contributionsData, setContributionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [hoveredBarDay, setHoveredBarDay] = useState(null);

  // Theme-specific CSS styling classes
  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const cardBorder   = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';
  const bgClass      = theme === 'dark' ? 'bg-[#242420]/30' : 'bg-gray-50/50';
  const metaColor    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';

  // Button style tokens
  const activeBtn   = theme === 'dark'
    ? 'bg-[#2a2a28] border-orange-500/40 text-[#e8e6e1] font-semibold'
    : 'bg-blue-50 border-blue-300 text-[#179cf0] font-semibold';
  const inactiveBtn = theme === 'dark'
    ? 'border-[#2a2a28] text-[#857f72] hover:bg-[#1f1f1c]'
    : 'border-gray-200 text-gray-500 hover:bg-gray-100';

  // GitHub Readme Stats URL parameters (color hex values without #)
  const titleColor  = theme === 'dark' ? '5b9bd5' : '179cf0'; // Theme blue accent
  const accentColor = theme === 'dark' ? '5b9bd5' : '179cf0';
  const textColor   = theme === 'dark' ? '857f72' : '4b5563'; // Body text

  // Years list since user joined GitHub in 2022
  const years = ['2026', '2025', '2024', '2023', '2022'];

  const fetchData = () => {
    setLoading(true);
    setError(null);
    fetch('https://github-contributions-api.jogruber.de/v4/ayush1k')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch contributions');
        }
        return res.json();
      })
      .then((data) => {
        setContributionsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Format dates consistently
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}, ${y}`;
  };

  // Format month and day for compact chart ticks
  const formatShortDate = (dateStr) => {
    if (!dateStr) return '';
    const [, m, d] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
  };

  // Extract recent 30 days of data leading up to current date
  const getRecent30DaysData = () => {
    if (!contributionsData?.contributions) return [];
    
    // Fallback to today's date in local time
    const todayStr = new Date().toISOString().split('T')[0];
    
    // Filter out future dates and sort chronologically descending to get most recent
    const pastEntries = contributionsData.contributions
      .filter(c => c.date <= todayStr)
      .sort((a, b) => b.date.localeCompare(a.date));
      
    // Take first 30 entries (most recent) and reverse to sort chronologically ascending (left-to-right)
    return [...pastEntries.slice(0, 30)].reverse();
  };

  const recent30Days = getRecent30DaysData();
  const maxRecentCount = recent30Days.length > 0
    ? Math.max(...recent30Days.map(d => d.count), 4)
    : 4;

  // Filter and process contributions for the selected year
  const yearData = contributionsData?.contributions?.filter((c) =>
    c.date.startsWith(selectedYear)
  ) || [];

  // Sort ascending chronologically
  const sortedYearData = [...yearData].sort((a, b) => a.date.localeCompare(b.date));

  // Determine starting weekday padding for the calendar grid
  let paddedData = [];
  if (sortedYearData.length > 0) {
    const firstDateStr = sortedYearData[0].date;
    const [y, m, d] = firstDateStr.split('-').map(Number);
    const firstDate = new Date(y, m - 1, d);
    const firstDayOfWeek = firstDate.getDay(); // 0 = Sunday, 1 = Monday, ...
    
    // Add padding at the start
    for (let i = 0; i < firstDayOfWeek; i++) {
      paddedData.push(null);
    }
    paddedData.push(...sortedYearData);
  }

  // Grid sizing constants (Calendar)
  const rectSize = 10;
  const gap = 2;
  const cellSize = rectSize + gap;
  const leftPadding = 30;
  const topPadding = 18;
  const columns = paddedData.length > 0 ? Math.ceil(paddedData.length / 7) : 53;
  const svgWidth = leftPadding + columns * cellSize;
  const svgHeight = topPadding + 7 * cellSize + 5;

  // Bar chart dimensions
  const barWidth = 10;
  const barGap = 5;
  const barChartLeftPadding = 35;
  const barChartRightPadding = 15;
  const barChartTopPadding = 15;
  const barChartHeight = 80;
  const barChartBottomPadding = 25;
  const barChartWidth = barChartLeftPadding + 30 * (barWidth + barGap) - barGap + barChartRightPadding; // 35 + 445 + 15 = 495
  const barChartSvgHeight = barChartTopPadding + barChartHeight + barChartBottomPadding; // 15 + 80 + 25 = 120

  const textColorHex = theme === 'dark' ? '#857f72' : '#6b7280';

  // Custom colors for contribution levels (Calendar)
  const levelColors = theme === 'dark'
    ? {
        0: '#2d2d2a',      // charcoal/dark card matching background
        1: '#452615',      // level 1 (deep dark orange)
        2: '#854117',      // level 2 (medium-dark orange)
        3: '#d96b27',      // level 3 (bright-medium orange)
        4: '#f97316',      // level 4 (vibrant orange-500)
      }
    : {
        0: '#ebedf0',      // standard light gray
        1: '#b9ddff',      // level 1 (very light blue)
        2: '#86c1ff',      // level 2 (light blue)
        3: '#179cf0',      // level 3 (vibrant theme blue)
        4: '#0062a3',      // level 4 (deep theme blue)
      };

  // Generate month labels without overlaps (Calendar)
  const monthLabels = [];
  let lastMonthCol = -5;
  paddedData.forEach((day, index) => {
    if (day) {
      const [, monthStr, dayStr] = day.date.split('-');
      if (dayStr === '01' || dayStr === '1') {
        const col = Math.floor(index / 7);
        if (col - lastMonthCol >= 3) {
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          monthLabels.push({
            label: months[parseInt(monthStr, 10) - 1],
            col,
          });
          lastMonthCol = col;
        }
      }
    }
  });

  // Calendar Hover Events
  const handleMouseEnter = (event, day) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const container = event.currentTarget.closest('.calendar-container').getBoundingClientRect();
    setHoveredDay({
      date: day.date,
      count: day.count,
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top - 38,
    });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  // Bar Chart Hover Events
  const handleBarMouseEnter = (event, day) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const container = event.currentTarget.closest('.bar-chart-container').getBoundingClientRect();
    setHoveredBarDay({
      date: day.date,
      count: day.count,
      x: rect.left - container.left + rect.width / 2,
      y: rect.top - container.top - 38,
    });
  };

  const handleBarMouseLeave = () => {
    setHoveredBarDay(null);
  };

  // X-axis label helper to limit labels
  const getBarXLabel = (index, dateStr) => {
    if (index === 0 || index === 14 || index === 29) {
      return formatShortDate(dateStr);
    }
    return null;
  };

  const totalContributions = contributionsData?.total?.[selectedYear] ?? 
    sortedYearData.reduce((sum, d) => sum + (d?.count ?? 0), 0);

  return (
    <section id="github" className="scroll-mt-20 space-y-4">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 mb-3 ${headingColor} ${divider}`}>
        GitHub Stats & Activity
      </h2>

      <div className="space-y-4">
        {/* Top section: Stats & Languages cards centered and scale-constrained */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Main GitHub Stats Card */}
          <div className={`border rounded-xl p-2.5 flex justify-center items-center h-36 w-full sm:w-[310px] ${cardBorder} ${bgClass}`}>
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=ayush1k&show_icons=true&theme=transparent&hide_border=true&title_color=${titleColor}&icon_color=${accentColor}&text_color=${textColor}&bg_color=00000000`}
              alt="Ayush Kumar's GitHub Stats"
              className="h-full object-contain"
              style={{ imageRendering: 'high-quality' }}
            />
          </div>

          {/* Top Languages Card */}
          <div className={`border rounded-xl p-2.5 flex justify-center items-center h-36 w-full sm:w-[280px] ${cardBorder} ${bgClass}`}>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ayush1k&layout=compact&theme=transparent&hide_border=true&title_color=${titleColor}&text_color=${textColor}&bg_color=00000000`}
              alt="Ayush Kumar's Top Languages"
              className="h-full object-contain"
              style={{ imageRendering: 'high-quality' }}
            />
          </div>
        </div>

        {/* Bottom section: Contribution Activity Dashboard */}
        <div className={`border rounded-xl p-4 space-y-6 ${cardBorder} ${bgClass}`}>
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="space-y-0.5">
              <h3 className={`text-[10px] font-bold uppercase tracking-widest ${metaColor}`}>
                GitHub Contribution Activity
              </h3>
              {contributionsData && (
                <p className="text-xs font-semibold text-gray-800 dark:text-[#e8e6e1]">
                  Recent activity details & annual history
                </p>
              )}
            </div>
            
            {/* Year Selector Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1 rounded text-xs border transition-all duration-150 cursor-pointer ${
                    selectedYear === year ? activeBtn : inactiveBtn
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Section 1: Recent Activity (Last 30 Days) */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-gray-700 dark:text-[#e8e6e1]/80 uppercase tracking-wider">
              Recent Activity (Last 30 Days)
            </h4>

            {/* Bar Chart Container */}
            <div className="relative bar-chart-container border border-dashed border-gray-200 dark:border-[#2a2a28] rounded-lg p-3 overflow-x-auto no-scrollbar flex flex-col items-center">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-2 w-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
                  <p className={`text-xs ${metaColor}`}>Loading activity stats...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-6 text-center space-y-2 w-full">
                  <p className="text-xs text-red-500 font-medium">Failed to load contribution data.</p>
                  <button 
                    onClick={fetchData} 
                    className="px-3 py-1 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-full overflow-x-auto no-scrollbar py-1">
                    <svg 
                      width={barChartWidth} 
                      height={barChartSvgHeight} 
                      className="mx-auto"
                      style={{ minWidth: `${barChartWidth}px` }}
                    >
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="barGradientLight" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#93c5fd" />
                          <stop offset="100%" stopColor="#179cf0" />
                        </linearGradient>
                        <linearGradient id="barGradientDark" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#c2410c" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line 
                        x1={barChartLeftPadding} 
                        y1={barChartTopPadding} 
                        x2={barChartWidth - barChartRightPadding} 
                        y2={barChartTopPadding} 
                        stroke={theme === 'dark' ? '#2d2d2a' : '#e5e7eb'} 
                        strokeDasharray="3 3" 
                      />
                      <line 
                        x1={barChartLeftPadding} 
                        y1={barChartTopPadding + barChartHeight / 2} 
                        x2={barChartWidth - barChartRightPadding} 
                        y2={barChartTopPadding + barChartHeight / 2} 
                        stroke={theme === 'dark' ? '#2d2d2a' : '#e5e7eb'} 
                        strokeDasharray="3 3" 
                      />
                      <line 
                        x1={barChartLeftPadding} 
                        y1={barChartTopPadding + barChartHeight} 
                        x2={barChartWidth - barChartRightPadding} 
                        y2={barChartTopPadding + barChartHeight} 
                        stroke={theme === 'dark' ? '#2b2b28' : '#d1d5db'} 
                      />

                      {/* Y-Axis Labels */}
                      <text x={barChartLeftPadding - 8} y={barChartTopPadding + 3} className="text-[8px] font-medium" fill={textColorHex} textAnchor="end" style={{ fontSize: '8px' }}>{maxRecentCount}</text>
                      <text x={barChartLeftPadding - 8} y={barChartTopPadding + barChartHeight / 2 + 3} className="text-[8px] font-medium" fill={textColorHex} textAnchor="end" style={{ fontSize: '8px' }}>{Math.round(maxRecentCount / 2)}</text>
                      <text x={barChartLeftPadding - 8} y={barChartTopPadding + barChartHeight + 3} className="text-[8px] font-medium" fill={textColorHex} textAnchor="end" style={{ fontSize: '8px' }}>0</text>

                      {/* Render Bars */}
                      {recent30Days.map((day, idx) => {
                        const isZero = day.count === 0;
                        const heightVal = isZero ? 4 : (day.count / maxRecentCount) * barChartHeight;
                        const x = barChartLeftPadding + idx * (barWidth + barGap);
                        const y = barChartTopPadding + barChartHeight - heightVal;

                        const barFill = isZero
                          ? (theme === 'dark' ? '#2d2d2a' : '#ebedf0')
                          : (theme === 'dark' ? 'url(#barGradientDark)' : 'url(#barGradientLight)');

                        return (
                          <rect
                            key={day.date}
                            x={x}
                            y={y}
                            width={barWidth}
                            height={heightVal}
                            rx={1.5}
                            ry={1.5}
                            fill={barFill}
                            stroke="transparent"
                            strokeWidth={1.5}
                            className={`transition-all duration-150 cursor-pointer ${
                              !isZero
                                ? (theme === 'dark' ? 'hover:stroke-orange-400' : 'hover:stroke-blue-500')
                                : ''
                            }`}
                            onMouseEnter={(e) => handleBarMouseEnter(e, day)}
                            onMouseLeave={handleBarMouseLeave}
                          />
                        );
                      })}

                      {/* X-Axis Tick Labels */}
                      {recent30Days.map((day, idx) => {
                        const label = getBarXLabel(idx, day.date);
                        if (!label) return null;
                        const x = barChartLeftPadding + idx * (barWidth + barGap) + barWidth / 2;
                        return (
                          <text
                            key={`tick-${idx}`}
                            x={x}
                            y={barChartTopPadding + barChartHeight + 14}
                            className="text-[8px] font-medium"
                            fill={textColorHex}
                            textAnchor="middle"
                            style={{ fontSize: '8px' }}
                          >
                            {label}
                          </text>
                        );
                      })}
                    </svg>
                  </div>

                  {hoveredBarDay && (
                    <div 
                      className="absolute z-10 px-2 py-1 text-[10px] font-semibold text-white bg-gray-900/95 border border-gray-800 rounded shadow-md pointer-events-none transform -translate-x-1/2 whitespace-nowrap"
                      style={{ left: hoveredBarDay.x, top: hoveredBarDay.y }}
                    >
                      {hoveredBarDay.count} contribution{hoveredBarDay.count !== 1 ? 's' : ''} on {formatDate(hoveredBarDay.date)}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200 dark:border-[#2a2a28] my-2"></div>

          {/* Section 2: Annual Calendar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-[11px] font-bold text-gray-700 dark:text-[#e8e6e1]/80 uppercase tracking-wider">
                Annual Calendar ({selectedYear})
              </h4>
              {contributionsData && (
                <span className="text-[10px] font-semibold text-gray-500 dark:text-[#857f72]">
                  {totalContributions.toLocaleString()} total contribution{totalContributions !== 1 ? 's' : ''}
                </span>
              )}
            </div>

            {/* Calendar SVG Widget Container */}
            <div className="relative calendar-container border border-dashed border-gray-200 dark:border-[#2a2a28] rounded-lg p-3 overflow-x-auto no-scrollbar flex flex-col items-center">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-2 w-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
                  <p className={`text-xs ${metaColor}`}>Loading calendar...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-6 text-center space-y-2 w-full">
                  <p className="text-xs text-red-500 font-medium">Failed to load calendar data.</p>
                  <button 
                    onClick={fetchData} 
                    className="px-3 py-1 text-xs border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-full overflow-x-auto no-scrollbar py-1">
                    <svg 
                      width={svgWidth} 
                      height={svgHeight} 
                      className="mx-auto"
                      style={{ minWidth: `${svgWidth}px` }}
                    >
                      {/* Month labels */}
                      {monthLabels.map((ml, idx) => (
                        <text
                          key={idx}
                          x={leftPadding + ml.col * cellSize}
                          y={topPadding - 6}
                          className="text-[9px] font-medium"
                          fill={textColorHex}
                          style={{ fontSize: '9px' }}
                        >
                          {ml.label}
                        </text>
                      ))}

                      {/* Day of week labels */}
                      <text x="0" y={topPadding + 1 * cellSize + 8} className="text-[9px] font-medium" fill={textColorHex} style={{ fontSize: '9px' }}>Mon</text>
                      <text x="0" y={topPadding + 3 * cellSize + 8} className="text-[9px] font-medium" fill={textColorHex} style={{ fontSize: '9px' }}>Wed</text>
                      <text x="0" y={topPadding + 5 * cellSize + 8} className="text-[9px] font-medium" fill={textColorHex} style={{ fontSize: '9px' }}>Fri</text>

                      {/* Day rects */}
                      {paddedData.map((day, index) => {
                        if (!day) return null;
                        const col = Math.floor(index / 7);
                        const row = index % 7;
                        const x = leftPadding + col * cellSize;
                        const y = topPadding + row * cellSize;
                        
                        return (
                          <rect
                            key={day.date}
                            x={x}
                            y={y}
                            width={rectSize}
                            height={rectSize}
                            rx={1.5}
                            ry={1.5}
                            fill={levelColors[day.level] ?? levelColors[0]}
                            stroke="transparent"
                            strokeWidth={1.5}
                            className={`transition-all duration-150 cursor-pointer ${
                              theme === 'dark' 
                                ? 'hover:stroke-orange-400' 
                                : 'hover:stroke-blue-500'
                            }`}
                            onMouseEnter={(e) => handleMouseEnter(e, day)}
                            onMouseLeave={handleMouseLeave}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Legend & Tooltip */}
                  <div className="w-full flex justify-between items-center mt-2 px-1 text-[10px]">
                    <div className="text-gray-400 dark:text-[#857f72]">
                      {/* Left blank for symmetry */}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-[#857f72]">
                      <span className="text-[9px]">Less</span>
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: levelColors[0] }} />
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: levelColors[1] }} />
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: levelColors[2] }} />
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: levelColors[3] }} />
                      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: levelColors[4] }} />
                      <span className="text-[9px]">More</span>
                    </div>
                  </div>

                  {hoveredDay && (
                    <div 
                      className="absolute z-10 px-2 py-1 text-[10px] font-semibold text-white bg-gray-900/95 border border-gray-800 rounded shadow-md pointer-events-none transform -translate-x-1/2 whitespace-nowrap"
                      style={{ left: hoveredDay.x, top: hoveredDay.y }}
                    >
                      {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''} on {formatDate(hoveredDay.date)}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
