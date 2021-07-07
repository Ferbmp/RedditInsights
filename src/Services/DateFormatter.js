import { fromUnixTime, formatDistanceToNow } from "date-fns";
import pt from "date-fns/locale/pt-BR";

export default function DateFormatter(post) {
  const dateFormmated = fromUnixTime(post);

  const difference = formatDistanceToNow(dateFormmated, {
    locale: pt,
    addSuffix: true,
  });

  return difference;
}
