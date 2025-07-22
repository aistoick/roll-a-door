import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TestimonialsLoading() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by thousands of companies
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="bg-white shadow-sm animate-pulse">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-5 w-5 bg-slate-200 rounded mr-1" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-3 mb-6">
                  <div className="h-4 bg-slate-200 rounded w-full" />
                  <div className="h-4 bg-slate-200 rounded w-5/6" />
                  <div className="h-4 bg-slate-200 rounded w-4/6" />
                </div>

                <div className="flex items-center">
                  <div className="h-12 w-12 bg-slate-200 rounded-full mr-4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-24" />
                    <div className="h-3 bg-slate-200 rounded w-32" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
