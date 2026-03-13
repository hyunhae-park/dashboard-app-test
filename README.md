# Data Analytics & AI Dashboard

본 프로젝트는 AI 에이전트의 구동 상태, 로그, 그리고 데이터 파이프라인의 핵심 지표들을 실시간으로 모니터링하기 위해 구축된 **통합 대시보드 애플리케이션(Integrated Dashboard App)**입니다.

Next.js 15+ 및 React 19 최신 스택을 기반으로 구축되었으며, 모던하고 인터랙티브한 UI/UX(Dynamic Design)를 제공하여 사용자가 시스템의 복잡한 데이터를 직관적으로 이해하고 제어할 수 있도록 설계되었습니다.

## 🌟 핵심 특징 (Key Features)

### 1. **Next.js 15 (App Router) 기반 모던 웹 환경**
강력한 라우팅 시스템과 서버 사이드 렌더링(SSR)을 통해 빠른 초기 로딩 속도와 향상된 SEO 경험을 제공합니다. AI 서비스 운영 환경에 필수적인 안정성과 성능을 보장합니다.

### 2. **풍부하고 동적인 UI 디자인 (Dynamic Aesthetics)**
- **Tailwind CSS v4 & Tailwind Merge**: 유연하고 일관성 있는 스타일 체계를 확립했습니다.
- **Glassmorphism & Micro-animations**: 단순한 통계 화면이 아닌, 사용자의 시선을 사로잡고 상호작용을 유도하는 심미적인 프론트엔드 환경(`lucide-react`, `tw-animate-css` 등 활용)을 구현했습니다.
- **Theme Support (Dark/Light Mode)**: `next-themes`를 활용하여 사용자 환경에 최적화된 다크 모드를 완벽하게 지원합니다.

### 3. **데이터 분석 및 인사이트 레이어 (준비 중)**
데이터분석형/문서처리형 기능 확장을 고려하여, 향후 RAG 시스템의 검색 품질(Retrieval Metrics), 에이전트 라우팅 결과, 로컬 데이터 전처리 현황 등을 시각화할 수 있는 확장 가능한 컴포넌트 아키텍처를 가지고 있습니다.

## 🛠 기술 스택 (Tech Stack)
- **Framework:** Next.js (App Router), React 19
- **Styling:** Tailwind CSS, shadcn/ui 기반 컴포넌트 아키텍처
- **Icons & Animation:** Lucide-React, tw-animate-css
- **Language:** TypeScript

## 🚀 빠른 시작 (Getting Started)

프로젝트를 로컬 환경에서 실행하는 방법입니다.

```bash
# 1. 패키지 설치
npm install

# 2. 개발 서버 실행
npm run dev
# 혹은 yarn dev, pnpm dev, bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)에 접속하여 대시보드 인터페이스를 확인할 수 있습니다.
