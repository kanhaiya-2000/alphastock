import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  
  const FormateDate = (timestamp)=>{
      const date = new Date(timestamp);
      const segment = (new Date()).toLocaleTimeString().split(':');
      const ifAMPM = segment[2].split(' ')[1];
      return ifAMPM ? segment[0]+":"+segment[1]+" "+ifAMPM : segment[0]+":"+segment[1];
  }
  export default function Chart2({data}) {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#24B157" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#24B157" stopOpacity={0.05} />
            </linearGradient>
          </defs>
  
          <Area dataKey="value" stroke="#24B157" fill="url(#color)" />
  
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `${FormateDate(number)}`}            
          />
  
          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `${number.toFixed(2)}`}
          />
  
          <Tooltip content={<CustomTooltip />} />
  
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  
  function CustomTooltip({ active, payload, label }) {
      
    if (active) {
        console.log(payload[0].payload)
      return (
        <div className="tooltip">         
          <p style={{color:"#fff"}}>PRICE({payload[0].payload.value.toFixed(2)}) at {new Date(payload[0].payload.date).toLocaleDateString()}</p>
        </div>
      );
    }
    return null;
  }
