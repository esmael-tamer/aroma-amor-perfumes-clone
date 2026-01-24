#!/bin/bash

echo "🚀 Starting Aroma Amor with Public URL for Bookeey Testing"
echo "=========================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if localtunnel is installed
if ! command -v lt &> /dev/null; then
    echo -e "${RED}❌ localtunnel is not installed${NC}"
    echo -e "${YELLOW}Installing localtunnel...${NC}"
    npm install -g localtunnel
fi

# Start Next.js in background
echo -e "${BLUE}📦 Starting Next.js server...${NC}"
npm run dev > /tmp/nextjs.log 2>&1 &
NEXTJS_PID=$!

# Wait for Next.js to start
echo -e "${YELLOW}⏳ Waiting for Next.js to start...${NC}"
sleep 5

# Check if Next.js is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo -e "${RED}❌ Next.js failed to start${NC}"
    echo "Check logs: tail -f /tmp/nextjs.log"
    exit 1
fi

echo -e "${GREEN}✅ Next.js is running on http://localhost:3000${NC}"
echo ""

# Start localtunnel
echo -e "${BLUE}🌐 Creating public tunnel...${NC}"
lt --port 3000 > /tmp/tunnel.log 2>&1 &
TUNNEL_PID=$!

# Wait for tunnel to start
sleep 3

# Get the public URL
PUBLIC_URL=$(grep -oP 'https://[^\s]+' /tmp/tunnel.log | head -1)

if [ -z "$PUBLIC_URL" ]; then
    echo -e "${RED}❌ Failed to create tunnel${NC}"
    echo "Check logs: cat /tmp/tunnel.log"
    kill $NEXTJS_PID 2>/dev/null
    exit 1
fi

echo -e "${GREEN}✅ Public URL created: ${PUBLIC_URL}${NC}"
echo ""
echo -e "${YELLOW}================================================${NC}"
echo -e "${GREEN}🎉 Your application is now accessible at:${NC}"
echo -e "${BLUE}${PUBLIC_URL}${NC}"
echo -e "${YELLOW}================================================${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANT: Update your .env.local file:${NC}"
echo ""
echo -e "${BLUE}NEXT_PUBLIC_APP_URL=${PUBLIC_URL}${NC}"
echo ""
echo -e "${YELLOW}Then restart this script.${NC}"
echo ""
echo -e "${RED}Press Ctrl+C to stop both servers${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}🛑 Stopping servers...${NC}"
    kill $NEXTJS_PID 2>/dev/null
    kill $TUNNEL_PID 2>/dev/null
    echo -e "${GREEN}✅ Cleanup complete${NC}"
    exit 0
}

# Set trap to cleanup on Ctrl+C
trap cleanup SIGINT SIGTERM

# Keep script running and show logs
echo -e "${BLUE}📋 Watching logs (Ctrl+C to stop):${NC}"
echo ""
tail -f /tmp/nextjs.log /tmp/tunnel.log
