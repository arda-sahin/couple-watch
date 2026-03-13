import { useEffect, useRef } from 'react';
import '../types';

const JITSI_SCRIPT_URL = 'https://meet.jit.si/external_api.js';
const ROOM_NAME = 'CoupleWatchPrivateRoom999';
const JITSI_DOMAIN = 'meet.jit.si';

export function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<ReturnType<typeof window.JitsiMeetExternalAPI> | null>(null);

  useEffect(() => {
    function initJitsi() {
      if (!containerRef.current || typeof window.JitsiMeetExternalAPI !== 'function') {
        return;
      }
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
      const api = new window.JitsiMeetExternalAPI(JITSI_DOMAIN, {
        roomName: ROOM_NAME,
        parentNode: containerRef.current,
        width: '100%',
        height: '100%',
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          disableDeepLinking: true,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          DEFAULT_LOGO_URL: '',
          DEFAULT_WELCOME_PAGE_LOGO_URL: '',
          TOOLBAR_BUTTONS: [
            'microphone',
            'camera',
            'closedcaptions',
            'desktop',
            'fullscreen',
            'fodeviceselection',
            'hangup',
            'participants-pane',
            'settings',
            'raisehand',
            'videoquality',
            'filmstrip',
            'tileview',
            'select-background',
          ],
          TOOLBAR_ALWAYS_VISIBLE: false,
          SHOW_BRAND_WATERMARK: false,
          BRAND_WATERMARK_LINK: '',
          GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
          DISPLAY_WELCOME_PAGE_CONTENT: false,
          APP_NAME: 'CoupleWatch',
          NATIVE_APP_NAME: 'CoupleWatch',
          PROVIDER_NAME: 'CoupleWatch',
        },
      });
      apiRef.current = api;
    }

    if (typeof window.JitsiMeetExternalAPI === 'function') {
      initJitsi();
    } else {
      const script = document.createElement('script');
      script.src = JITSI_SCRIPT_URL;
      script.onload = () => initJitsi();
      document.body.appendChild(script);
    }

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
        apiRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
      }}
    />
  );
}
