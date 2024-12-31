import Link from "next/link";

import Mars from "./mars.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-4 m-4 mx-auto max-w-xl">
      <div className="flex items-center gap-2 text-4xl font-bold">
        <Image width={100} height={100} src={Mars} alt="Mars" />
        <span>쿠키플레이스 React 19 워크샵</span>
      </div>
      <Link
        href="/without-forward-ref"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        Forward Ref 삭제!
      </Link>
      <Link
        href="/form-status"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        폼 상태 읽기
      </Link>
      <Link
        href="/replay"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        하이드레이션 리플레이
      </Link>
      <Link
        href="/streaming"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        스트리밍 렌더링
      </Link>
      <Link
        href="/async-node"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        비동기 요소 렌더링
      </Link>
      <Link
        href="/async-action-before"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        레거시 폼 제출
      </Link>
      <Link
        href="/async-action"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        비동기 액션
      </Link>
      <Link
        href="/compiler-before"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        높은 CPU 렌더링 + 컴파일러 없음 + 동시성 없음
      </Link>
      <Link
        href="/compiler-applied"
        className="border-2 border-gray-300 rounded-md px-2 py-1 bg-gray-200"
      >
        높은 CPU 렌더링 + 컴파일러 사용 + 동시성 사용
      </Link>
    </div>
  );
}
