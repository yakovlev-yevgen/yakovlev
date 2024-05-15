import { Container } from '@/components/ui-kit/Container';

export default function Home() {
  return (
    // here below will be all the sections
    <section>
      <Container>
        <h1 className="text-ui_light_16">Це секція приклад Roboto 16px 300</h1>
        <h1 className="font-ui_kurier text-ui_bold_20">
          It is an example section 20px 700 Kurier
        </h1>
        <h1 className="font-ui_kurier text-ui_reg_20">
          Це секція приклад 20px 400 Kurier
        </h1>
      </Container>
    </section>
  );
}
