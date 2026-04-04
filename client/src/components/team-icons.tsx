import { type ReactNode } from "react";

type P = { className?: string };

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

/**
 * DIRECCIÓN — Rosa de los vientos (dirigir el equipo, dar rumbo)
 * 4 flechas cardinales + 4 marcas diagonales + anillo central
 */
export function CompassRoseIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Flecha Norte */}
      <polygon points="32,4 27,22 32,17 37,22" fill="currentColor" stroke="none" />
      {/* Flecha Sur */}
      <polygon points="32,60 37,42 32,47 27,42" fill="currentColor" stroke="none" />
      {/* Flecha Este */}
      <polygon points="60,32 42,27 47,32 42,37" fill="currentColor" stroke="none" />
      {/* Flecha Oeste */}
      <polygon points="4,32 22,27 17,32 22,37" fill="currentColor" stroke="none" />
      {/* Puntas diagonales (NE, NW, SE, SW) */}
      <line x1="40" y1="24" x2="49" y2="15" strokeWidth="3" />
      <line x1="24" y1="24" x2="15" y2="15" strokeWidth="3" />
      <line x1="40" y1="40" x2="49" y2="49" strokeWidth="3" />
      <line x1="24" y1="40" x2="15" y2="49" strokeWidth="3" />
      {/* Anillo central */}
      <circle cx="32" cy="32" r="9" />
      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/**
 * MECÁNICA — Llave combinada (boca fija + boca estrella)
 */
export function WrenchCustomIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Mango redondeado */}
      <rect x="8" y="27" width="36" height="10" rx="5" />
      {/* Boca estrella / hexagonal (derecha) */}
      <circle cx="52" cy="32" r="11" />
      <circle cx="52" cy="32" r="5" />
      {/* Boca fija (izquierda) — mordazas en U */}
      <line x1="8" y1="27" x2="3" y2="20" />
      <line x1="8" y1="37" x2="3" y2="44" />
      <path d="M 3 20 A 11 12 0 0 0 3 44" />
    </Svg>
  );
}

/**
 * ESTRUCTURA — Chasis tubular en vista isométrica (space frame)
 * Caja isométrica con triangulación estructural
 */
export function ChassisFrameIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Cara frontal */}
      <path d="M 6 16 L 6 52 L 38 52 L 38 16 Z" />
      {/* Cara superior (isométrica) */}
      <path d="M 6 16 L 22 6 L 58 6 L 38 16 Z" />
      {/* Cara derecha (isométrica) */}
      <path d="M 38 16 L 58 6 L 58 42 L 38 52 Z" />
      {/* Triangulación cara frontal (espacio tubular) */}
      <line x1="6" y1="16" x2="38" y2="52" />
      <line x1="38" y1="16" x2="6" y2="52" />
      {/* Diagonal cara superior */}
      <line x1="6" y1="16" x2="58" y2="6" />
      {/* Diagonal cara derecha */}
      <line x1="38" y1="16" x2="58" y2="42" />
    </Svg>
  );
}

/**
 * ELECTRÓNICA — PCB con chip central y pines en los 4 lados
 */
export function PCBIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* PCB exterior */}
      <rect x="12" y="12" width="40" height="40" rx="3" />
      {/* Chip central */}
      <rect x="22" y="22" width="20" height="20" rx="2" />
      {/* Pines izquierda */}
      <line x1="2"  y1="22" x2="12" y2="22" />
      <line x1="2"  y1="32" x2="12" y2="32" />
      <line x1="2"  y1="42" x2="12" y2="42" />
      {/* Pines derecha */}
      <line x1="52" y1="22" x2="62" y2="22" />
      <line x1="52" y1="32" x2="62" y2="32" />
      <line x1="52" y1="42" x2="62" y2="42" />
      {/* Pines arriba */}
      <line x1="22" y1="2"  x2="22" y2="12" />
      <line x1="32" y1="2"  x2="32" y2="12" />
      <line x1="42" y1="2"  x2="42" y2="12" />
      {/* Pines abajo */}
      <line x1="22" y1="52" x2="22" y2="62" />
      <line x1="32" y1="52" x2="32" y2="62" />
      <line x1="42" y1="52" x2="42" y2="62" />
      {/* Indicador pin 1 */}
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </Svg>
  );
}

/**
 * BATERÍAS — Pack de baterías EV con celdas y rayo eléctrico
 * Geometría limpia y precisa
 */
export function BatteryZapIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Cuerpo principal */}
      <rect x="4" y="16" width="52" height="32" rx="4" />
      {/* Terminal positivo */}
      <rect x="56" y="24" width="6" height="16" rx="2" />
      {/* Divisiones de celda */}
      <line x1="20" y1="16" x2="20" y2="48" />
      <line x1="36" y1="16" x2="36" y2="48" />
      {/* Rayo eléctrico — polyline limpia en forma de Z */}
      <polyline
        points="44,20 37,33 43,33 32,48"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}

/**
 * DISEÑO — Compás de dibujo técnico con arco trazado
 */
export function CompassDraftIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Pivote superior */}
      <circle cx="32" cy="8" r="4" />
      {/* Pata izquierda (recta hacia abajo-izquierda) */}
      <line x1="29.5" y1="11.5" x2="16" y2="54" />
      {/* Pata derecha con articulación de lápiz */}
      <line x1="34.5" y1="11.5" x2="42" y2="36" />
      <line x1="42" y1="36" x2="50" y2="36" />
      <line x1="50" y1="36" x2="50" y2="54" />
      {/* Punta del lápiz */}
      <polygon points="48,54 52,54 50,60" fill="currentColor" stroke="none" />
      {/* Arco dibujado */}
      <path d="M 16 54 Q 32 64 50 54" />
      {/* Travesaño */}
      <line x1="20" y1="30" x2="38" y2="30" />
    </Svg>
  );
}

/**
 * FOTOVOLTAICA — Panel solar con cuadrícula y sol detallado
 */
export function SolarPanelIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Panel solar */}
      <rect x="2" y="26" width="44" height="32" rx="2" />
      {/* Cuadrícula interna */}
      <line x1="2"  y1="37" x2="46" y2="37" />
      <line x1="2"  y1="47" x2="46" y2="47" />
      <line x1="17" y1="26" x2="17" y2="58" />
      <line x1="32" y1="26" x2="32" y2="58" />
      {/* Soporte inclinado */}
      <line x1="12" y1="58" x2="8"  y2="64" />
      <line x1="36" y1="58" x2="40" y2="64" />
      <line x1="6"  y1="64" x2="42" y2="64" />
      {/* Sol (esquina superior derecha) */}
      <circle cx="54" cy="12" r="7" />
      {/* Rayos del sol (8 rayos) */}
      <line x1="54" y1="1"  x2="54" y2="4"  />
      <line x1="54" y1="20" x2="54" y2="23" />
      <line x1="43" y1="12" x2="46" y2="12" />
      <line x1="62" y1="12" x2="65" y2="12" />
      <line x1="46.1" y1="4.1"  x2="48.2" y2="6.2"  />
      <line x1="59.8" y1="17.8" x2="61.9" y2="19.9" />
      <line x1="61.9" y1="4.1"  x2="59.8" y2="6.2"  />
      <line x1="48.2" y1="17.8" x2="46.1" y2="19.9" />
    </Svg>
  );
}

/**
 * TELEMETRÍA — Pantalla de osciloscopio con señal de datos
 */
export function WaveformIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Pantalla con esquinas redondeadas */}
      <rect x="2" y="6" width="60" height="44" rx="4" />
      {/* Cuadrícula de fondo */}
      <line x1="2"  y1="28" x2="62" y2="28" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="2"  y1="17" x2="62" y2="17" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="2"  y1="39" x2="62" y2="39" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="22" y1="6"  x2="22" y2="50" strokeWidth="0.75" strokeOpacity="0.4" />
      <line x1="42" y1="6"  x2="42" y2="50" strokeWidth="0.75" strokeOpacity="0.4" />
      {/* Señal de telemetría (forma de onda digital) */}
      <polyline
        strokeWidth="2"
        fill="none"
        points="2,28 9,28 9,14 15,14 15,42 22,42 22,18 29,18 29,36 36,36 36,10 43,10 43,32 50,32 55,20 60,20"
      />
      {/* Soporte de monitor */}
      <line x1="22" y1="50" x2="20" y2="58" />
      <line x1="42" y1="50" x2="44" y2="58" />
      <line x1="14" y1="58" x2="50" y2="58" />
    </Svg>
  );
}

/**
 * MOTOR — Sección transversal de motor eléctrico (estátor + rotor + rayo)
 */
export function ElectricMotorIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Carcasa exterior */}
      <circle cx="32" cy="32" r="27" />
      {/* Estátor (bobinados) */}
      <circle cx="32" cy="32" r="18" />
      {/* Rotor */}
      <circle cx="32" cy="32" r="9" />
      {/* Eje / árbol de transmisión */}
      <rect x="29" y="1"  width="6" height="13" rx="3" />
      <rect x="29" y="50" width="6" height="13" rx="3" />
      {/* Polos magnéticos (marcas en el estátor) */}
      <line x1="14" y1="32" x2="22" y2="32" />
      <line x1="42" y1="32" x2="50" y2="32" />
      <line x1="32" y1="14" x2="32" y2="22" />
      <line x1="32" y1="42" x2="32" y2="50" />
      {/* Rayo eléctrico en el rotor */}
      <polyline
        points="34,24 30,31 34,31 29,40"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}

/**
 * ILUMINACIÓN — Faro LED delantero de carreras con haces de luz
 */
export function HeadlightCustomIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Carcasa del faro (reflector trasero) */}
      <path d="M 4 10 L 4 54 L 22 46 L 22 18 Z" />
      {/* Lente circular */}
      <circle cx="22" cy="32" r="14" />
      {/* Reflector interior */}
      <circle cx="22" cy="32" r="6" />
      {/* Punto de luz LED */}
      <circle cx="22" cy="32" r="2" fill="currentColor" stroke="none" />
      {/* Haces de luz (5 rayos divergentes) */}
      <line x1="36" y1="32" x2="62" y2="32" />
      <line x1="35" y1="26" x2="60" y2="18" />
      <line x1="35" y1="38" x2="60" y2="46" />
      <line x1="32" y1="20" x2="54" y2="9"  />
      <line x1="32" y1="44" x2="54" y2="55" />
      {/* Tira DRL (luz diurna) */}
      <rect x="2" y="10" width="3" height="44" rx="1.5" />
    </Svg>
  );
}

/**
 * MARKETING Y DISEÑO — Megáfono con ondas de sonido
 */
export function MegaphoneCustomIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Cuerpo del altavoz (caja) */}
      <rect x="4" y="22" width="10" height="20" rx="3" />
      {/* Pabellón del megáfono (trapezoide que se ensancha) */}
      <path d="M 14 22 L 50 8 L 50 56 L 14 42 Z" />
      {/* Correa colgante desde la parte baja del cuerpo */}
      <path d="M 9 42 L 9 54 Q 9 58 13 58 Q 18 58 18 54 L 18 42" />
      {/* Ondas de sonido */}
      <path d="M 52 20 Q 60 32 52 44" />
      <path d="M 56 14 Q 66 32 56 50" />
    </Svg>
  );
}

/**
 * PARTNERS Y FINANZAS — Bandera a cuadros (meta de la carrera, patrocinadores)
 */
export function CheckeredFlagIcon({ className }: P) {
  return (
    <Svg className={className}>
      {/* Asta de la bandera */}
      <line x1="8" y1="4" x2="8" y2="62" strokeWidth="2" />
      {/* Borde de la bandera */}
      <rect x="8" y="4" width="52" height="36" rx="1" />
      {/* Patrón ajedrezado (4 col × 4 fil, cada celda 13×9) */}
      {/* Fila 1 — rellenas en col 1 y 3 */}
      <rect x="8"  y="4"  width="13" height="9" fill="currentColor" stroke="none" />
      <rect x="34" y="4"  width="13" height="9" fill="currentColor" stroke="none" />
      {/* Fila 2 — rellenas en col 2 y 4 */}
      <rect x="21" y="13" width="13" height="9" fill="currentColor" stroke="none" />
      <rect x="47" y="13" width="13" height="9" fill="currentColor" stroke="none" />
      {/* Fila 3 — rellenas en col 1 y 3 */}
      <rect x="8"  y="22" width="13" height="9" fill="currentColor" stroke="none" />
      <rect x="34" y="22" width="13" height="9" fill="currentColor" stroke="none" />
      {/* Fila 4 — rellenas en col 2 y 4 */}
      <rect x="21" y="31" width="13" height="9" fill="currentColor" stroke="none" />
      <rect x="47" y="31" width="13" height="9" fill="currentColor" stroke="none" />
    </Svg>
  );
}
