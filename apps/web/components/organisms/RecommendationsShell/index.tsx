import type { RecommendationWithAuthor } from '@/services/recommendations'
import RecommendationCard from '@/components/organisms/RecommendationCard'
import LeaveRecommendationForm from '@/components/organisms/LeaveRecommendationForm'
import SectionHeading from '@/components/molecules/SectionHeading'

interface Props {
  recommendations: RecommendationWithAuthor[]
}

const RecommendationsShell = ({ recommendations }: Props) => (
  <>
    <section className="relative pb-14" id="recommendations">
      <SectionHeading
        num="01"
        label="RECOMMENDATIONS"
        title="What I am building toward."
        aside={
          <>
            ~/recommendations
            <br />
            <span className="text-[var(--accent)]">● {recommendations.length} verified</span>
          </>
        }
      />

      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1 mb-12">
        <article className="border border-[var(--border)] bg-[var(--surface)] rounded-[14px] p-6"><span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)]">01 / OWNERSHIP</span><h3 className="mt-3 mb-2 text-[18px] text-[var(--text-bright)]">Lead from idea to delivery.</h3><p className="m-0 text-[13px] leading-[1.65] text-[var(--text)]">Attend AI gave me experience coordinating a final-year team, integrating features and taking responsibility for the final product.</p></article>
        <article className="border border-[var(--border)] bg-[var(--surface)] rounded-[14px] p-6"><span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)]">02 / ENGINEERING</span><h3 className="mt-3 mb-2 text-[18px] text-[var(--text-bright)]">Build depth, not just demos.</h3><p className="m-0 text-[13px] leading-[1.65] text-[var(--text)]">I am strengthening Java, Spring Boot, REST APIs, SQL, security and frontend skills through projects that solve concrete problems.</p></article>
        <article className="border border-[var(--border)] bg-[var(--surface)] rounded-[14px] p-6"><span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)]">03 / NEXT</span><h3 className="mt-3 mb-2 text-[18px] text-[var(--text-bright)]">Turn job hunting into a product.</h3><p className="m-0 text-[13px] leading-[1.65] text-[var(--text)]">JobTrack is an active build based on my own job-search workflow, with a roadmap toward React and Spring Boot.</p></article>
      </div>

      {recommendations.length > 0 && <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1 mb-14">{recommendations.map((rec) => <RecommendationCard key={rec.id} rec={rec} />)}</div>}
    </section>

    <LeaveRecommendationForm />
  </>
)

export default RecommendationsShell
