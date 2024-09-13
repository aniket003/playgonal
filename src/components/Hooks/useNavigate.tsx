import { useRouter } from 'next/navigation';

interface UseNavigate {
  navigate: (url: string) => void;
}

const useNavigate = (): UseNavigate => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  return { navigate };
};

export default useNavigate;