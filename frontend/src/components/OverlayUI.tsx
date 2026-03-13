import { useDraggable } from '../hooks/useDraggable'

export function OverlayUI() {
  const { position, handleMouseDown } = useDraggable(50, 50);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: `${position.x}vw`,
          top: `${position.y}vh`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#ff4757',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Me
      </div>
    </div>
  );
}
